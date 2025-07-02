# # backend/main.py

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi import Query

from PIL import Image
import numpy as np
import torch
import torchvision.transforms as transforms
import faiss
import sqlite3
import os
import io

# Load model
model = torch.hub.load('pytorch/vision:v0.10.0', 'resnet50', pretrained=True)
model.eval()
model = torch.nn.Sequential(*list(model.children())[:-1])

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/catalog_img", StaticFiles(directory="catalog_img"), name="catalog_img")

product_ids = []
product_map = {}
index = faiss.IndexFlatL2(2048)
product_dir = "catalog_img"

def preprocess_image(image: Image.Image) -> torch.Tensor:
    return transform(image).unsqueeze(0)

def extract_embedding(image: Image.Image) -> np.ndarray:
    with torch.no_grad():
        input_tensor = preprocess_image(image)
        embedding = model(input_tensor).squeeze().numpy()
        return embedding / np.linalg.norm(embedding)

def get_product_metadata(product_id: str):
    conn = sqlite3.connect("db/products.db")
    cursor = conn.cursor()
    cursor.execute("SELECT id, title, price, image_url, category FROM products WHERE id = ?", (product_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(zip(["id", "title", "price", "image_url", "category"], row)) if row else {}

def load_product_catalog():
    for file in os.listdir(product_dir):
        if file.endswith((".jpg", ".jpeg", ".png")):
            print("Indexing:", repr(file))  # shows full raw string

            path = os.path.join(product_dir, file)
            image = Image.open(path).convert("RGB")
            vec = extract_embedding(image)
            index.add(np.array([vec]).astype("float32"))
            product_ids.append(file)
            product_map[file] = f"/catalog_img/{file}"

@app.on_event("startup")
async def startup_event():
    load_product_catalog()

@app.post("/search")
async def search(file: UploadFile = File(...), category: str = Query(None)):
    print("📥 Received image upload...")
    
    image_data = await file.read()
    image = Image.open(io.BytesIO(image_data)).convert("RGB")

    query_vec = extract_embedding(image).astype("float32").reshape(1, -1)
    D, I = index.search(query_vec, k=10)

    # Get uploaded image's best match → use it to infer category
    top_id = product_ids[I[0][0]]
    print(f" Top match ID: {top_id}")
    print(f" All product_ids: {product_ids}")
    ref_product = get_product_metadata(top_id)
    ref_category = ref_product.get("category")
    print(f" Using reference category: {ref_category}")

    results = []
    for i in I[0]:
        product = get_product_metadata(product_ids[i])
        if product and product["category"] == ref_category:
            results.append(product)
        if len(results) == 5:
            break

    print("Final results prepared.")
    return JSONResponse(content={"results": results})

@app.get("/")
def root():
    return {"message": "✅ AI Image Search API is running"}


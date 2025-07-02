import sqlite3

conn = sqlite3.connect("db/products.db")
cursor = conn.cursor()

# Initialize schema
with open("db/schema.sql") as f:
    cursor.executescript(f.read())

# Insert sample data
products = [
    ("tshirt.jpg", "Red Shirt", 29.99, "/catalog_img/tshirt.jpg", "mens wear"),
    ("ring.jpg", "Blue Jeans", 59.99, "/catalog_img/ring.jpg", "jwellery"),
    ("led.jpeg", "LED", 89.99, "/catalog_img/led.jpeg", "electronics"),
    ("kurti.jpg", "Kurti", 49.99, "/catalog_img/kurti.jpg", "womens wear"),
    ("kurti1.jpg", "Kurti1", 49.99, "/catalog_img/kurti1.jpg", "womens wear"),
    ('saree.jpg', "Saree", 39.99, "/catalog_img/saree.jpg", "womens wear"),
    ('saree1.jpg', "Saree", 39.99, "/catalog_img/saree1.jpg", "womens wear"),
    ('tshirtt1.jpg', "T-Shirt", 29.99, "/catalog_img/tshirtt1.jpg", "mens wear"),
    ('tshirtt2.jpg', "T-Shirt", 29.99, "/catalog_img/tshirtt2.jpg", "mens wear"),

    
]

cursor.executemany("INSERT INTO products VALUES (?, ?, ?, ?, ?)", products)
conn.commit()
conn.close()
# Close the database connection
import { useState } from "react";
import "../src/Css/Uploadimg.css";
import { useRef } from "react";
import CategoryDropdown from "./components/CategoryDropdown";
const Similar = () => {
  const [file, setSelectedfile] = useState(null);
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click(); // open file system
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedfile(file);
    console.log("Selected file:", file);
  };
  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/search", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Results:", data.results);
      setResults(data.results);
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return (
    <>
      <div>
        <div className="upload-img">
          <div>
            {file ? <p>Selected: {file.name}</p> : <p>Select Image : </p>}

            <button className="btn btn-secondary" onClick={handleClick}>
              Upload Image
            </button>
            <input
              type="file"
              ref={inputRef}
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>

          <button
            className="btn btn-secondary btn-text"
            onClick={handleUpload}
            disabled={!file} // ✅ disable when no file selected
          >
            Submit
          </button>

          {/* <div className="category-dropdown">
            <p className="descrip">Select Product Category</p>
            <CategoryDropdown
              category={category}
              onChange={setCategory}
            ></CategoryDropdown>
          </div> */}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            // marginTop: "50px",
            padding: "10px",
            marginTop: "30px",
          }}
        >
          {results.map((item) => (
            <div
              key={item.id}
              style={{
                flex: "1 1 250px",
                maxWidth: "300px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                color: "black",
                cursor: "pointer",
              }}
              className="product-card"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="heart"
                  viewBox="0 0 24 24"
                >
                  <title>Add to fav</title>

                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 
           5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 
           1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  />
                </svg>
              </div>
              <img
                src={`http://127.0.0.1:8000${item.image_url}`}
                alt={item.title}
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />

              <h2
                style={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  fontSize: "1.2rem",
                }}
              >
                {item.title}
              </h2>
              {/* <p>
                {" "}
                <p
                  style={{
                    fontSize: "0.9rem",
                    marginBottom: "8px",
                    flexGrow: 1,
                  }}
                >
                  {item.description.slice(0, 90)}...
                </p>
              </p> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "auto",
                }}
              >
                <p style={{ fontWeight: "bold" }}>Price: ${item.price}</p>
                {/* <p>{product.rating.rate}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Similar;

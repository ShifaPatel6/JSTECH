import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TopPage from "./TopPage";

const Productstore = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  //   const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    // Fetch Products
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Products:", data);
        setProducts(data);
      });
  }, []);
  useEffect(() => {
    // Fetch Products
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log("categories:", data);
        setCategories(data);
      });
  }, []);

  const FilteredProducts =
    selected === "all"
      ? products
      : products.filter((product) => product.category === selected);

  return (
    <>
      <div>
        <TopPage></TopPage>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          gap: "10px",
          alignItems: "center",
          marginTop: "20px",
          padding: "10px",
        }}
      >
        Categories :
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          {console.log("selected:", selected)}
          <option value="all">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          // marginTop: "50px",
          padding: "10px",
        }}
      >
        {FilteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              flex: "1 1 250px",
              maxWidth: "300px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              backgroundColor: "black",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              color: "white",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
            <h2 style={{ fontWeight: "bold", marginTop: "20px" }}>
              {product.title}
            </h2>
            <p>
              {" "}
              <p
                style={{ fontSize: "0.9rem", marginBottom: "8px", flexGrow: 1 }}
              >
                {product.description.slice(0, 90)}...
              </p>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p style={{ fontWeight: "bold", marginTop: "20px" }}>
                Price: ${product.price}
              </p>
              {/* <p>{product.rating.rate}</p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Productstore;

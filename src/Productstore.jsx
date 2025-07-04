import React, { useState, useEffect } from "react";
import "../src/Css/Product.css";
import { useContext } from "react";
import { FavoriteContext } from "../src/Contexts/FavContext";
import { useNavigate } from "react-router-dom";

const Productstore = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  //   const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState("all");
  const [showMsg, setShowMsg] = useState("");

  useEffect(() => {
    // Fetch Products
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Products:", data);
        setProducts(data);
      });
  }, []);
  // useEffect(() => {
  //   // Fetch Products
  //   fetch("https://fakestoreapi.com/products/categories")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("categories:", data);
  //       setCategories(data);
  //     });
  // }, []);
  const { addToFavorites, favorites, RemoveFavorites } =
    useContext(FavoriteContext);
  const FilteredProducts =
    selected === "all"
      ? products
      : products.filter((product) => product.category === selected);

  const handleToggleFavorite = (product) => {
    const isAlreadyFav = favorites.some((fav) => fav.id === product.id);

    if (isAlreadyFav) {
      RemoveFavorites(product.id);
      setShowMsg("Removed from Fav");
      setTimeout(() => setShowMsg(""), 1500);
    } else {
      addToFavorites(product);
      setShowMsg("Added to Fav");
      setTimeout(() => setShowMsg(""), 1500);
    }
  };

  return (
    <>
      {/* <div>
        <TopPage></TopPage>
      </div> */}
      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          gap: "10px",
          alignItems: "center",
          marginTop: "20px",
          padding: "10px",
        }}
      > */}
      {/* <CategoryDropdown selected={selected} onChange={setSelected} /> */}
      {/* </div> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          // marginTop: "50px",
          padding: "40px",
          marginTop: "20px",
        }}
      >
        {FilteredProducts.map((product) => {
          const isAlreadyFav = favorites.some((fav) => fav.id === product.id);

          return (
            <div
              key={product.id}
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
              onClick={() =>
                navigate("/Buyproduct", {
                  state: {
                    product: {
                      id: product.id,
                      title: product.title,
                      image: product.image,
                      price: product.price,
                      description: product.description,
                    },
                  },
                })
              }
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
                  className={`heart ${isAlreadyFav ? "filled" : ""}`}
                  viewBox="0 0 24 24"
                  onClick={() => handleToggleFavorite(product)}
                >
                  <title>{isAlreadyFav ? "Added to Fav" : "Add to fav"}</title>
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 
           5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 
           1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  />
                </svg>
              </div>
              <img src={product.image} alt={product.title} />
              <h2
                style={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  fontSize: "1.2rem",
                }}
              >
                {product.title.slice(0, 10)}...
              </h2>
              <p>
                {" "}
                <p
                  style={{
                    fontSize: "0.9rem",
                    marginBottom: "8px",
                    flexGrow: 1,
                  }}
                >
                  {product.description.slice(0, 90)}...
                </p>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "auto",
                }}
              >
                <p style={{ fontWeight: "bold" }}>Price: ${product.price}</p>
                {/* <p>{product.rating.rate}</p> */}
              </div>
            </div>
          );
        })}
        {showMsg && <div className="fav-popup">{showMsg}</div>}
      </div>
    </>
  );
};
export default Productstore;

import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { FavoriteContext } from "../Contexts/FavContext";

const CatProducts = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const [showMsg, setShowMsg] = useState(false);
  const category = location.state?.category;
  const { addToFavorites, favorites, RemoveFavorites } =
    useContext(FavoriteContext);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category]);
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
      <div style={{ textAlign: "center", marginTop: "10%",fontWeight:'bold',fontSize:'1.5rem' }}>{category}</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          // marginTop: "50px",
          padding: "40px",
       //    marginTop: "30px",
        }}
      >
        {products.map((product) => {
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
                  viewBox="0 0 24 24"
                  onClick={() => handleToggleFavorite(product)}
                  className={`heart ${isAlreadyFav ? "filled" : ""}`}
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
export default CatProducts;

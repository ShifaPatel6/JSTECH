import { useContext, useState } from "react";
import { FavoriteContext } from "../Contexts/FavContext";
import "../Css/Product.css";

const Favorites = () => {
  const { favorites, RemoveFavorites } = useContext(FavoriteContext);
  const [showMsg, setShowMsg] = useState(false);

  const handleRemove = (id) => {
    RemoveFavorites(id);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 1500);
  };

  return (
    <div>
      <h2 style={{ marginTop: "8%", textAlign: "center" }}>My Favorites</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          //    justifyContent: "center",
          gap: "20px",
          // marginTop: "50px",
          padding: "40px",
          //    marginTop: "20px",
        }}
      >
        {favorites.map((product) => (
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
                className="heart2"
                viewBox="0 0 24 24"
                onClick={() => handleRemove(product.id)}
              >
                <title>Remove from Fav</title>

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
                marginTop: "auto",
              }}
            >
              <p style={{ fontWeight: "bold" }}>Price: ${product.price}</p>
              {/* <p>{product.rating.rate}</p> */}
            </div>
          </div>
        ))}
      </div>
      {showMsg && <div className="fav-popup">Removed from Favorites</div>}
    </div>
  );
};
export default Favorites;

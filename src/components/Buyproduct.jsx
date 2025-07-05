import react from "react";
import { useLocation } from "react-router-dom";

const Buyproduct = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <>
      <div
        className="row "
        style={{ marginTop: "10%", display: "flex", justifyContent: "center" }}
      >
        {" "}
        <div className="col-md-3 bg-body-tertiary border rounded-3 ">
          {" "}
          <div className="h-100 p-5  rounded-3">
            {/* {product.id} */}
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "200px",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <div
              style={{
                marginTop: "3rem",
                textAlign: "center",
              }}
            >
              {product.title}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
                justifyContent: "space-between",
                fontWeight: "bold",
              }}
            >
              ${product.price}
              <button
                className="btn btn-outline-dark"
                type="button"
                style={{ width: "80px" }}
              >
                Buy
              </button>
            </div>
          </div>{" "}
        </div>{" "}
        <div className="col-md-6">
          {" "}
          <div className="h-100 p-5 bg-body-tertiary border rounded-3">
            <h4>Description</h4>
            {product.description}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default Buyproduct;

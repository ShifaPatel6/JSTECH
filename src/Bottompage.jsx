import react from "react";

const Bottompage = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 mt-2 px-4 ">
        <div className="col d-flex flex-column align-items-start gap-2">
          {" "}
          <h2 className="fw-bold text-body-emphasis">
            Discover a World of Affordable Fashion & Everyday Essentials Upgrade
          </h2>{" "}
          <p className="text-body-secondary">
            your wardrobe and stock your home with the latest trends and
            essentials at prices designed for everyday value. Meesho offers a
            vast selection of products across all categories, ensuring you find
            everything you need at prices suited for everyday budgets.
          </p>{" "}
          <div className="d-flex flex-row cursor-pointer">
            <img
              src="../src/assets/facebook.png"
              alt="sdfghj"
              style={{ width: "15%", height: "15%" }}
            />
            <img
              src="../src/assets/insta.png"
              alt="dfghjk"
              style={{ width: "15%", height: "15%" }}
            />

            <img
              src="../src/assets/linkedin.png"
              alt="dfghj"
              style={{ width: "15%", height: "15%" }}
            />
          </div>
        </div>{" "}
        <div className="col">
          {" "}
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            {" "}
            <div className="col d-flex flex-column gap-2">
              {" "}
              <div> </div>{" "}
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Shop Millions of Products Across All Categories
              </h4>{" "}
              <p className="text-body-secondary">
                From trendy fashion finds to essential homeware, Meesho is your
                one-stop shop for everything you need.{" "}
              </p>
            </div>{" "}
            <div className="col d-flex flex-column gap-2">
              {" "}
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Western Wear for Women
              </h4>{" "}
              <p className="text-body-secondary">
                Are you looking to revamp your wardrobe with stylish and
                affordable pieces? Look no further than Meesho's extensive
                collection of women's western wear. Find trendy dresses, casual
                jeans, and comfortable tops suitable for any occasion{" "}
              </p>{" "}
            </div>{" "}
            <div className="col d-flex flex-column gap-2">
              {" "}
              <div></div>{" "}
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Accessories, Jewellery, and Footwear{" "}
              </h4>{" "}
              <p className="text-body-secondary">
                Elevate your outfit and add a touch of personality with Meesho's
                diverse range of accessories. Choose from a wide selection of
                jewelry sets, handbags, belts, and footwear to complement your
                style.{" "}
              </p>{" "}
            </div>{" "}
            <div className="col d-flex flex-column gap-2">
              {" "}
              <div></div>{" "}
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Men’s Western Wear
              </h4>{" "}
              <p className="text-body-secondary">
                Upgrade your casual or formal attire with Meesho's men's wear
                collection. We offer a vast selection of T-shirts, jeans, polos,
                coats, and shirts in all sizes. Our user-friendly search tool
                allows you to filter by size, color, and material.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        Copyright © 2025 | All rights reserved | Design & Developed by SHIFA
      </div>
    </>
  );
};

export default Bottompage;

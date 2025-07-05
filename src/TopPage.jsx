import React from "react";

import "../src/Css/TopPageCss.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const TopPage = () => {
  const navigate = useNavigate();
  const categoryRef = useRef(null);
  const handleScrolldown = () => {
    categoryRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="top-page-background">
        <div className="text-image-wrapper">
          <div className="text-block">
            <div className="BackgroundText">
              <h3>
                Discover Trendsetting Fashion for Every Style – Shop the Latest
                Collections Online!
              </h3>
            </div>
            <div className="buttons-container">
              <button className="shop-now-button" onClick={handleScrolldown}>
                Shop Now
              </button>
              {/* <img src="../src/assets/arraow.png" alt="" width={43} /> */}

              <button
                onClick={() => navigate("/Similar")}
                className="shop-now-button"
              >
                Shop Similar Products
              </button>
              {/* <img src="../src/assets/arraow.png" alt="" width={43} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPage;

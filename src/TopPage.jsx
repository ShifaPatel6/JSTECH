import React from "react";

import "../src/Css/TopPageCss.css";
import { useNavigate } from "react-router-dom"; // Ensure you have a CSS file for global styles

const TopPage = () => {
  const navigate = useNavigate();
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
              <div className="shop-now-button ">
                <div>Shop Now</div>
                <img src="../src/assets/arraow.png" alt="" width={43} />
              </div>
              <div className="shop-now-button">
                <button onClick={() => navigate("/Similar")}>
                  Shop Similar Products
                </button>
                <img src="../src/assets/arraow.png" alt="" width={43} />
              </div>
            </div>
          </div>
          {/* <div
            style={{ position: "relative", width: "300px", height: "300px" }}
          >
            <svg
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0,
                width: "100%",
                height: "100%",
              }}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFB6C1"
                d="M45.4,-62.6C59.4,-52.1,70.6,-39.4,76.3,-24.7C82,-10,82.1,6.6,76.3,21.4C70.5,36.2,58.8,49.1,44.3,59.8C29.8,70.4,12.5,78.8,-4.2,81.3C-21,83.9,-42,80.6,-56.3,68.7C-70.6,56.8,-78.2,36.3,-76.3,18.6C-74.4,0.8,-62.9,-14.1,-52.8,-28.1C-42.6,-42.2,-33.9,-55.4,-21.8,-65.3C-9.7,-75.1,5.9,-81.5,21.9,-80.9C37.9,-80.3,53.4,-72.9,45.4,-62.6Z"
                transform="translate(100 100)"
              />
            </svg>

            <img
              src="../src/assets/Bags.png"
              alt="main"
              style={{
                position: "relative",
                zIndex: 1,
                width: "300px",
                height: "300px",
                borderRadius: "10px",
              }}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default TopPage;

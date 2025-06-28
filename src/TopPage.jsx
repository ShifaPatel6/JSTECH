import React from "react";
import Productstore from "./Productstore";
import Header from "./components/Header";
import "../src/Css/TopPageCss.css"; // Ensure you have a CSS file for global styles

const TopPage = () => {
  return (
    <>
      <Header />
      <div className="top-page-background">
        <div className="text-image-wrapper">
          <div className="text-block">
            <div className="BackgroundText">
              <h3>
                Discover Trendsetting Fashion for Every Style – Shop the Latest
                Collections Online!
              </h3>
            </div>
            <div className="shop-now-button ">
              <button>Shop Now</button>
              <img src="../src/assets/arraow.png" alt="" width={43} />
            </div>
          </div>
          <img src="../src/assets/Bags.png" alt="Bags" className="bag-image" />
        </div>
      </div>
    </>
  );
};

export default TopPage;

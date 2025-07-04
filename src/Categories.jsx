import react from "react";
import { useState, useEffect } from "react";
import "../src/Css/Category.css";
import Productstore from "../src/Productstore";
import Bottompage from "./Bottompage";

const Categories = () => {
  return (
    <>
      <div className="cat-img">
        <div className="cat-text">
          <img src="../src/assets/1.png" alt="" />
          <h5>Women's Wear</h5>
        </div>
        <div className="cat-text">
          <img src="../src/assets/2.png" alt="" />
          <h5>Men's Wear</h5>
        </div>
        <div className="cat-text">
          <img src="../src/assets/3.png" alt="" />
          <h5>Jwellery</h5>
        </div>
        <div className="cat-text">
          <img src="../src/assets/4.png" alt="" />
          <h5>Gadgets</h5>
        </div>
        
      </div>
      <div className="Headline">
        <div className="Popular">Popular</div>
        <div className="Popular Head">
          <div className="Headline1">
            <span> SALE SALE SALE  SALE SALE SALE </span>
            <span> SALE SALE SALE  SALE SALE SALE </span>
            <span> SALE SALE SALE  SALE SALE SALE </span>
            <span> SALE SALE SALE  SALE SALE SALE </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Categories;

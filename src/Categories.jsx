import react from "react";
import { useState, useEffect } from "react";
import "../src/Css/Category.css";
import Productstore from "../src/Productstore";
import Bottompage from "./Bottompage";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="cat-img">
        <div className="cat-text">
          <img
            src="../src/assets/1.png"
            alt=""
            onClick={() =>
              navigate("/CatProducts", {
                state: { category: "women's clothing" },
              })
            }
          />
          <h5>Women's Wear</h5>
        </div>
        <div className="cat-text">
          <img
            src="../src/assets/2.png"
            alt=""
            onClick={() =>
              navigate("/CatProducts", {
                state: { category: "men's clothing" },
              })
            }
          />
          <h5>Men's Wear</h5>
        </div>
        <div className="cat-text">
          <img
            src="../src/assets/3.png"
            alt=""
            onClick={() =>
              navigate("/CatProducts", {
                state: { category: "jewelery" },
              })
            }
          />
          <h5>Jewelery</h5>
        </div>
        <div className="cat-text">
          <img
            src="../src/assets/4.png"
            alt=""
            onClick={() =>
              navigate("/CatProducts", {
                state: { category: "electronics" },
              })
            }
          />
          <h5>Gadgets</h5>
        </div>
      </div>
      <div className="Headline">
        <div className="Popular">Popular</div>
        <div className="Popular Head">
          <div className="Headline1">
            <span> SALE SALE SALE SALE SALE SALE </span>
            <span> SALE SALE SALE SALE SALE SALE </span>
            <span> SALE SALE SALE SALE SALE SALE </span>
            <span> SALE SALE SALE SALE SALE SALE </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Categories;

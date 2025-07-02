import react from "react";
import { useState, useEffect } from "react";
import "../src/Css/Category.css";
import Productstore from "../src/Productstore";

const Categories = () => {
  return (
    <>
      <div className="cat-img">
        <div className="cat-text">
          <img src="../src/assets/1.png" alt="" width={250} />
          <h5>Women's Wear</h5>
        </div>
        <div className="cat-text">
          <img src="../src/assets/2.png" alt="" width={250} />
          <h5>Men's Wear</h5>
        </div>
        <div className="cat-text">
          <img src="../src/assets/3.png" alt="" width={250} />
          <h5>Jwellery</h5>
        </div>
        <div className="cat-text">
          <img src="../src/assets/4.png" alt="" width={250} />
          <h5>Gadgets</h5>
        </div>
      </div>
      <div className="Popular">Popular</div>
      <div>
        <Productstore></Productstore>
      </div>
    </>
  );
};
export default Categories;

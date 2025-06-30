import react from "react";
import { useState, useEffect } from "react";
import "../src/Css/Uploadimg.css";
import { useRef } from "react";
const Similar = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click(); // open file system
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
    // handle file here
  };
  return (
    <>
      <div>
        <div className="upload-img">
          <button className="btn btn-secondary " onClick={handleClick}>
            Upload Image
          </button>
          <input
            type="file"
            ref={inputRef}
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </>
  );
};
export default Similar;

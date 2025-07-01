// src/components/CategoryDropdown.jsx
import { useEffect, useState } from "react";

const CategoryDropdown = ({ selected, onChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);



  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <span>Categories:</span>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "5px",
          fontSize: "1rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      >
        <option value="all">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;

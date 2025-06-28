import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { useState } from "react";
const Logoutpop = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    console.log("User logged out successfully");
  };

  return (
    <>
      <div>
        <h2>Confirm Logout</h2>
        <p>Are you sure you want to logout?</p>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </>
  );
};

export default Logoutpop;

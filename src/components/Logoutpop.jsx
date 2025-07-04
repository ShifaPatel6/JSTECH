import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Logout.css"; // Import your CSS file for styles
const Logoutpop = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    console.log("User logged out successfully");
  };

  return (
    <div className="logout-popup">
      <div className="logout-popup-content">
        <h2>Confirm Logout</h2>
        <p>Are you sure you want to logout?</p>
        <div className="logout-popup-buttons">
          <button
            onClick={handleLogout}
            className="confirm-btn"
            style={{
              backgroundColor: "#450b51",
              color: "white",
            }}
          >
            Logout
          </button>
          <button
            onClick={onClose}
            className="cancel-btn"
            style={{
              backgroundColor: "gray",
              color: "white",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logoutpop;

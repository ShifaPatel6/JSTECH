import React from "react";
import { CgProfile } from "react-icons/cg";
import "../Css/Header.css"; // Import your CSS file for styles
import { useState } from "react";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const[logout, setLogout] = useState(false);
  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };
  
  return (
    <>
      <div
        style={{
          backgroundColor: "orange",
          width: "100%",
          padding: "10px",
          //    border: "1px solid #000",
          height: "70px",
          // borderRadius: "8px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000, // Ensure header stays above other content
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{ marginLeft: "20px", fontWeight: "bolder" }}
            className="header-text"
          >
            BE{" "}
            <span
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "20px",
              }}
            >
              FASHION
            </span>{" "}
            ICON
          </div>
          <img
            src="../src/assets/profile.png"
            alt="profile"
            style={{
              width: "50px",
              height: "50px",
              cursor: "pointer",
            }}
            onClick={handleProfileClick}
            className="header-icon"
          />
        </div>

        {showProfile && (
          <div className="profile-dropdown">
            <div className="profile-dropdown-content">
              <div className="profile-dropdown-header">
                <img src="../src/assets/proicon.png" alt="profile" />
                <p>Profile</p>
              </div>

              <div className="profile-dropdown-header">
                <img src="../src/assets/logout.png" alt="logout" />
                <p onClick={handleLogout}>Logout</p>
              </div>
              <div className="profile-dropdown-header">
                <img src="../src/assets/setting.png" alt="setting" />
                <p>Settings</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

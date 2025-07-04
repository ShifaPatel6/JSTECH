import React from "react";
import { CgProfile } from "react-icons/cg";
import "../Css/Header.css"; // Import your CSS file for styles
import { useState, useEffect } from "react";
import Logoutpop from "./Logoutpop"; // Import the Logoutpop component
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  const navigate = useNavigate();

  const openLogoutPopup = () => {
    setShowLogoutPopup(true);
    setShowProfile(false); // Close profile dropdown when logout is clicked
  };

  useEffect(() => {
    if (showLogoutPopup) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when popup is open
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling when popup is closed
    }
  }, [showLogoutPopup]);
  return (
    <>
      <div
        style={{
          backgroundColor: "#450b51",
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
            style={{ marginLeft: "20px", fontWeight: "bolder", color: "white" }}
            className="header-text"
          >
            BE{" "}
            <span
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "20px",
                color: "black",
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
              {/* <div className="profile-dropdown-header">
                <img src="../src/assets/proicon.png" alt="profile" />
                <p>Profile</p>
              </div> */}

              <div className="profile-dropdown-header">
                <img src="../src/assets/orders.png" alt="setting" width={250} />
                <p>My orders</p>
              </div>
              <div className="profile-dropdown-header">
                <img src="../src/assets/Fav.png" alt="setting" />
                <p onClick={() => navigate("/Favorites")} >Favourites</p>
              </div>
              <div className="profile-dropdown-header">
                <img src="../src/assets/setting.png" alt="setting" />
                <p>Settings</p>
              </div>
              <div className="profile-dropdown-header">
                <img src="../src/assets/logout.png" alt="logout" />
                <p onClick={openLogoutPopup}>Logout</p>
              </div>
            </div>
          </div>
        )}
        {showLogoutPopup && (
          <Logoutpop onClose={() => setShowLogoutPopup(false)} />
        )}
      </div>
    </>
  );
};

export default Header;

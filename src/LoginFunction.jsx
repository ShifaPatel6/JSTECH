import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/Css/Login.css"; // Ensure you have a CSS file for styles

const LoginFunction = ({ onSwitchToRegister }) => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // 1️Log credentials
    console.log("Attempting login with:", { username, password });

    try {
      const res = await fetch(
        "https://cors-anywhere.herokuapp.com/https://dummyjson.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // Use state variables here
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await res.json();
      console.log("Status:", res.status, "Response:", data);

      if (res.ok) {
        localStorage.setItem("token", data.accessToken);
        navigate("/Productstore");
        alert("✅ Login successful!");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Network error:", err);
      setError("Network error");
    }
  };

 

  return (
    <>
      <div className="login-container">
        <h3>Login</h3>
        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            justifyContent: "center",
            margin: "20px auto",
            gap: "20px",
            padding: "20px",
            height: "350px",
            textAlign: "center",
          }}
          className="login-form"
        >
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "10px", fontSize: "1rem" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", fontSize: "1rem" }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
          <a href="/" style={{ color: "#007bff" }}>
            Forgot Password?
          </a>
          <p>
            Don’t have an account?{" "}
            <span
              style={{ color: "#007bff", cursor: "pointer" }}
              onClick={onSwitchToRegister}
            >
              Register
            </span>
          </p>
          {error && (
            <div style={{ color: "red", textAlign: "center" }}>{error}</div>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginFunction;

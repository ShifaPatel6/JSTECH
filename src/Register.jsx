import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Attempting login with:", { email, username, password });

    try {
      const res = await fetch(
        "https://cors-anywhere.herokuapp.com/https://dummyjson.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // Use state variables here
          body: JSON.stringify({ email, username, password }),
        }
      );

      const data = await res.json();
      console.log("Status:", res.status, "Response:", data);
    } catch (err) {
      console.error("Network error:", err);
      setError("Network error");
    }
  };
  return (
    <>
      <div className="login-container">
        <h3>Register</h3>
        <form
          onSubmit={handleRegister}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            justifyContent: "center",
            margin: "20px auto",
            gap: "20px",
            padding: "20px",
            height: "450px",
            textAlign: "center",
          }}
          className="login-form"
        >
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "10px", fontSize: "1rem" }}
          />
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
            Register
          </button>

          <p>
            Already have an account?{" "}
            <span
              style={{ color: "#007bff", cursor: "pointer" }}
              onClick={onSwitchToLogin}
            >
              Login
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

export default Register;

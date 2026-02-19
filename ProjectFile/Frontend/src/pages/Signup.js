import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    const user = {
      name,
      email,
      password,
      role,
    };

    // SAVE ACCOUNT
    localStorage.setItem("bookstoreUser", JSON.stringify(user));

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Create Account</h2>

        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* ROLE */}
        <label>Register As</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>

        <button className="login-btn" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;

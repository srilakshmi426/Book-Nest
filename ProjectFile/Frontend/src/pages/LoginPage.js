import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleLogin = () => {
    const savedUser = JSON.parse(
      localStorage.getItem("bookstoreUser")
    );

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    // DEBUG (optional)
    console.log("Saved:", savedUser);
    console.log("Entered:", { email, password, role });

    if (
      email === savedUser.email &&
      password === savedUser.password &&
      role === savedUser.role
    ) {
      alert("Login successful!");

      if (role === "user") navigate("/user");
      if (role === "seller") navigate("/seller");
      if (role === "admin") navigate("/admin");
    } else {
      alert("Invalid email, password, or role");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <label>Login As</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>

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

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="signup-text">
          Don’t have an account?
          <Link to="/signup"> Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

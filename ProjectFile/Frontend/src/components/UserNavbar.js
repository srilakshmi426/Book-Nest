import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserNavbar.css";

function UserNavbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="user-navbar">
      <div className="logo">BookStore</div>

      <ul className="nav-links">
        <li><Link to="/user">Dashboard</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/user/orders">Orders</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default UserNavbar;

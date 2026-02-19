import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // If using localStorage/session later
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="user-dashboard">
      <h2 className="dashboard-title">Welcome to BookEase</h2>
      <p className="dashboard-subtitle">
        Manage your account and explore books easily
      </p>

      <div className="dashboard-grid">

        <div className="dashboard-card" onClick={() => navigate("/profile")}>
          <h3>👤 Profile Management</h3>
          <p>Update your name, email and password.</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate("/books")}>
          <h3>📚 Browse Books</h3>
          <p>Explore books by title, author or genre.</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate("/cart")}>
          <h3>🛒 Purchase</h3>
          <p>Add books to cart and complete purchases.</p>
        </div>

        <div className="dashboard-card" onClick={() => navigate("/feedback")}>
          <h3>⭐ Feedback</h3>
          <p>Give ratings and feedback to books & sellers.</p>
        </div>

        <div className="dashboard-card logout-card" onClick={handleLogout}>
          <h3>🚪 Logout</h3>
          <p>Securely logout from the application.</p>
        </div>

      </div>
    </div>
  );
}

export default UserDashboard;

import React from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>

      <div className="admin-cards">
        <div className="admin-card">
          <h4>System Management</h4>
          <p>Manage system settings and security</p>
        </div>

        <div className="admin-card">
          <h4>User Management</h4>
          <p>Manage users and ratings</p>
        </div>

        <div className="admin-card">
          <h4>Book Management</h4>
          <p>Add, update, delete books</p>
        </div>

        <div className="admin-card">
          <h4>Seller Management</h4>
          <p>Approve and manage sellers</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

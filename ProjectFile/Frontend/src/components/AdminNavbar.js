import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";

function AdminNavbar() {
  return (
    <nav className="admin-navbar">
      <div className="logo">Admin Panel</div>

      <ul className="nav-links">
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/users">Users</Link></li>
        <li><Link to="/admin/books">Books</Link></li>
        <li><Link to="/admin/orders">Orders</Link></li>
        <li><Link to="/admin/wishlist">Wishlist</Link></li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;

import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function SellerLayout() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      
      {/* ===== NAVBAR ===== */}
      <div style={navbarStyle}>
        <div style={{ fontWeight: "bold", fontSize: "18px" }}>
          BookStore (Seller)
        </div>

        <div>
          <Link to="/seller/dashboard" style={link}>Home</Link>
          <Link to="/seller/products" style={link}>MyProducts</Link>
          <Link to="/seller/add-book" style={link}>Add Books</Link>
          <Link to="/seller/orders" style={link}>Orders</Link>

          <button onClick={handleLogout} style={logoutBtn}>
            Logout
          </button>
        </div>
      </div>

      {/* ===== PAGE CONTENT ===== */}
      <div style={{ padding: "30px" }}>
        <Outlet />
      </div>

    </div>
  );
}

const navbarStyle = {
  background: "linear-gradient(to right, #0000ff, #1e90ff)",
  padding: "15px 30px",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const link = {
  color: "white",
  marginLeft: "20px",
  textDecoration: "none",
  fontWeight: "500"
};

const logoutBtn = {
  marginLeft: "20px",
  padding: "5px 12px",
  backgroundColor: "white",
  color: "blue",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold"
};

export default SellerLayout;

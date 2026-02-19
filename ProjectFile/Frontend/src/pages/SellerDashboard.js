import React from "react";

function SellerDashboard() {
  return (
    <div style={container}>

      <h2 style={{ marginBottom: "30px" }}>DashBoard</h2>

      <div style={cardContainer}>
        
        {/* Items Card */}
        <div style={{ ...card, backgroundColor: "#1abc9c" }}>
          <h3>Items</h3>
          <p style={numberStyle}>4</p>
        </div>

        {/* Orders Card */}
        <div style={{ ...card, backgroundColor: "orange" }}>
          <h3>Total Orders</h3>
          <p style={numberStyle}>2</p>
        </div>

      </div>

    </div>
  );
}

const container = {
  textAlign: "center",
  backgroundColor: "#e6cfa5",
  minHeight: "80vh",
  padding: "40px"
};

const cardContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "80px",
  marginTop: "40px"
};

const card = {
  padding: "30px 60px",
  borderRadius: "10px",
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
};

const numberStyle = {
  fontSize: "28px",
  marginTop: "10px"
};

export default SellerDashboard;

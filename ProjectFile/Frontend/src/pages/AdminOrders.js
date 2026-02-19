import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminOrders.css";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/orders");
      setOrders(res.data);
    } catch (err) {
      console.log("Error fetching orders", err);
    }
  };

  return (
    <div className="orders-container">
      <h2 className="orders-title">All Orders</h2>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        orders.map((order) => (
          <div className="order-card" key={order._id}>

            <img
              src={`http://localhost:5000${order.productImage}`}
              alt="book"
              className="order-image"
            />

            <div className="order-details">
              <p><b>User Name:</b> {order.userName}</p>
              <p><b>Product Name:</b> {order.productName}</p>
              <p><b>Order ID:</b> {order._id}</p>
            </div>

            <div className="order-details">
              <p><b>Price:</b> ₹{order.price}</p>
              <p><b>Status:</b> {order.status}</p>
            </div>

          </div>
        ))
      )}
    </div>
  );
}

export default AdminOrders;

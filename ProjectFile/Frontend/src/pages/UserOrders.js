import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./UserOrders.css";

function UserOrders({ orders, setOrders }) {
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Delete Function
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      const updatedOrders = orders.filter((order) => order.id !== id);
      setOrders(updatedOrders);
      setSelectedOrder(null);
    }
  };

  return (
    <div className="orders-container">
      <h2>User Orders</h2>

      <table className="orders-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Product</th>
            <th>Buyer</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.productName}</td>
              <td>{order.buyer}</td>
              <td className="status">{order.status}</td>
              <td>
                <button
                  className="view-btn"
                  onClick={() => setSelectedOrder(order)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {selectedOrder && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>User Orders</h3>

            <div className="order-details">
              <img
                src={selectedOrder.image}
                alt="book"
                className="order-image"
              />

              <div className="details-grid">
                <p><b>Product Name:</b> {selectedOrder.productName}</p>
                <p><b>Order Id:</b> {selectedOrder.orderId}</p>
                <p><b>Address:</b> {selectedOrder.address}</p>
                <p><b>Buyer:</b> {selectedOrder.buyer}</p>
                <p><b>Seller:</b> {selectedOrder.seller}</p>
                <p><b>Booking Date:</b> {selectedOrder.bookingDate}</p>
                <p><b>Delivery By:</b> {selectedOrder.deliveryDate}</p>
                <p><b>Warranty:</b> {selectedOrder.warranty}</p>
                <p><b>Price:</b> ₹{selectedOrder.price}</p>
                <p><b>Status:</b> {selectedOrder.status}</p>
              </div>
            </div>

            {/* Delete Icon */}
            <div className="delete-section">
              <FaTrash
                className="delete-icon"
                onClick={() => handleDelete(selectedOrder.id)}
              />
            </div>

            <button
              className="close-btn"
              onClick={() => setSelectedOrder(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserOrders;

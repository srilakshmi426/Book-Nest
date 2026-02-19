import React, { useState } from "react";
import "./AdminUsers.css";

function AdminUsers() {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: "6565f34c4dcf3f5e8",
      name: "Harshitha",
      email: "harshi@gmail.com",
      orders: [
        { book: "React Guide", price: 499 },
        { book: "Node Mastery", price: 399 }
      ]
    },
    {
      id: "6565f34c4dcf3f5e9",
      name: "Ravi",
      email: "ravi@gmail.com",
      orders: [
        { book: "MongoDB Basics", price: 299 }
      ]
    }
  ];

  return (
    <div className="admin-users-container">
      <h2 className="title">Users Management</h2>

      <table className="users-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Orders</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="view-btn"
                  onClick={() => setSelectedUser(user)}
                >
                  View Orders
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ===== Modal ===== */}
      {selectedUser && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{selectedUser.name}'s Orders</h3>

            {selectedUser.orders.length === 0 ? (
              <p>No orders found</p>
            ) : (
              <ul>
                {selectedUser.orders.map((order, index) => (
                  <li key={index}>
                    {order.book} - ₹{order.price}
                  </li>
                ))}
              </ul>
            )}

            <button
              className="close-btn"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminUsers;

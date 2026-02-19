import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

function SellerProducts() {
  const [books, setBooks] = useState([]);

  // ✅ Fetch Books Function
  const fetchBooks = () => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // ✅ Delete Function
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/books/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Book deleted successfully ✅");

        // Remove deleted book from state (No refresh needed)
        setBooks(books.filter((book) => book._id !== id));
      } else {
        alert("Delete failed ❌");
      }
    } catch (error) {
      console.log("Delete Error:", error);
    }
  };

  return (
    <div style={{ background: "#4b5563", minHeight: "100vh", padding: "40px" }}>
      <div
        style={{
          background: "white",
          width: "80%",
          margin: "auto",
          padding: "30px",
          borderRadius: "8px",
          maxHeight: "500px",
          overflowY: "auto",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#3b82f6" }}>
          Vendor Products
        </h2>

        {books.map((book) => {
          // 🔥 Image Logic
          let imageUrl = "https://via.placeholder.com/60x80";

          if (book.title === "The Cat in the Hat") {
            imageUrl = "http://localhost:5000/public/images/cat.png";
          } else if (book.title === "Think and Grow Rich") {
            imageUrl = "http://localhost:5000/public/images/think.jpg";
          } else if (book.image) {
            imageUrl = `http://localhost:5000${book.image}`;
          }

          return (
            <div
              key={book._id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #ddd",
                padding: "15px",
                marginTop: "15px",
                borderRadius: "6px",
              }}
            >
              {/* Image */}
              <img
                src={imageUrl}
                alt="book"
                style={{
                  width: "60px",
                  height: "80px",
                  objectFit: "cover",
                }}
              />

              {/* Product Name */}
              <div>
                <strong>Product Name:</strong>
                <p>{book.title}</p>
              </div>

              {/* Order ID */}
              <div>
                <strong>OrderId:</strong>
                <p>{book._id.slice(-8)}</p>
              </div>

              {/* Warranty */}
              <div>
                <strong>Warranty:</strong>
                <p>1 year</p>
              </div>

              {/* Price */}
              <div>
                <strong>Price:</strong>
                <p>₹ {book.price}</p>
              </div>

              {/* ✅ Delete Icon */}
              <FaTrash
                onClick={() => handleDelete(book._id)}
                style={{
                  color: "red",
                  fontSize: "18px",
                  cursor: "pointer",
                  transition: "0.2s",
                }}
                onMouseOver={(e) => (e.target.style.color = "darkred")}
                onMouseOut={(e) => (e.target.style.color = "red")}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SellerProducts;

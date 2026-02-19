import React, { useEffect, useState } from "react";
import "./AdminBookList.css";

function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(
      (book) => book._id !== id
    );

    setWishlist(updatedWishlist);
    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  if (wishlist.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Your Wishlist is Empty ❤️
      </h2>
    );
  }

  return (
    <div className="admin-books-container">
      <h2 className="title">My Wishlist</h2>

      <div className="book-grid">
        {wishlist.map((book) => (
          <div className="book-card" key={book._id}>
            <img
              src={
                book.image
                  ? `http://localhost:5000${book.image}`
                  : "http://localhost:5000/public/images/cat.png"
              }
              alt={book.title}
              className="book-img"
            />

            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p className="price">₹ {book.price}</p>

            <div className="btn-group">
              <button
                className="remove-wishlist-btn"
                onClick={() =>
                  removeFromWishlist(book._id)
                }
              >
                Remove from Wishlist
              </button>

              <button className="view-btn">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishlistPage;

import React, { useEffect, useState } from "react";
import "./AdminBookList.css";

function AdminBookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching books:", err);
        setLoading(false);
      });
  }, []);

  // ✅ Save to localStorage also
  const toggleWishlist = (book) => {
    let updatedWishlist;

    const exists = wishlist.find((item) => item._id === book._id);

    if (exists) {
      updatedWishlist = wishlist.filter((item) => item._id !== book._id);
    } else {
      updatedWishlist = [...wishlist, book];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="admin-books-container">
      <h2 className="title">Book List</h2>

      <div className="book-grid">
        {books.map((book) => {
          const isWishlisted = wishlist.some(
            (item) => item._id === book._id
          );

          return (
            <div className="book-card" key={book._id}>
              <img
                src={
                  book.image
                    ? `http://localhost:5000${book.image}`
                    : book.title === "The Cat in the Hat"
                    ? "http://localhost:5000/public/images/cat.png"
                    : book.title === "Think and Grow Rich"
                    ? "http://localhost:5000/public/images/think.jpg"
                    : book.title === "Rich Dad Poor Dad"
                    ? "http://localhost:5000/public/images/richdad.jpg"
                    : book.title === "Atomic Habits"
                    ? "http://localhost:5000/public/images/atomic.jpg"
                    : book.title === "The Alchemist"
                    ? "http://localhost:5000/public/images/alchemist.jpg"
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
                  className={
                    isWishlisted
                      ? "remove-wishlist-btn"
                      : "wishlist-btn"
                  }
                  onClick={() => toggleWishlist(book)}
                >
                  {isWishlisted
                    ? "Remove from Wishlist"
                    : "Add to Wishlist"}
                </button>

                <button className="view-btn">View</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminBookList;

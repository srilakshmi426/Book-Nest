import React from "react";
import { useNavigate } from "react-router-dom";
import "./BookList.css";

function BookList() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h2>Books</h2>

      {/* Login Button */}
      <button
        onClick={() => navigate("/login")}
        style={{
          marginBottom: "25px",
          padding: "10px 20px",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Login to Continue
      </button>

      <div className="home-books">
        {/* Book 1 */}
        <div className="home-book">
          <img
            src="https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"
            alt="Rich Dad Poor Dad"
          />
          <p>RICH DAD POOR DAD</p>
        </div>

        {/* Book 2 */}
        <div className="home-book">
          <img
            src="https://m.media-amazon.com/images/I/71UypkUjStL.jpg"
            alt="Think and Grow Rich"
          />
          <p>THINK AND GROW RICH</p>
        </div>

        {/* Book 3 */}
        <div className="home-book">
          <img
            src="https://m.media-amazon.com/images/I/81drfTT9ZfL.jpg"
            alt="The Cat in the Hat"
          />
          <p>The Cat in the Hat</p>
        </div>

        {/* Book 4 */}
        <div className="home-book">
          <img
            src="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
            alt="Atomic Habits"
          />
          <p>ATOMIC HABITS</p>
        </div>
      </div>
    </div>
  );
}

export default BookList;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <h1 className="about-heading">ABOUT</h1>

      <div className="about-content">
        {/* LEFT SIDE TEXT */}
        <div className="about-text">
          <p>
            Welcome to <strong>Book Store</strong>.
            This is an online bookstore where users can explore
            and purchase books easily.
          </p>

          <p>
            We offer a wide collection of books from popular authors
            at affordable prices. Our goal is to make book shopping
            simple and enjoyable.
          </p>

          <button onClick={() => navigate("/books")}>
            Go to Books
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="Books"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

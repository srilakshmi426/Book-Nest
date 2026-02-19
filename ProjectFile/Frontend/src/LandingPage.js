import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="overlay">
        <h1>Welcome to Book Store</h1>
        <p>Your one stop shop for amazing books</p>

        <button onClick={() => navigate("/about")}>
          Start
        </button>
      </div>
    </div>
  );
}

export default LandingPage;

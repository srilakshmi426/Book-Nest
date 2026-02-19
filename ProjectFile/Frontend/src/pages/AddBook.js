import React, { useState } from "react";
import axios from "axios";

function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    image: ""
  });

  const [message, setMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.author || !formData.price) {
      setMessage("Please fill all required fields ❌");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/books",
        formData
      );

      console.log(response.data);

      setMessage("Book Added Successfully ✅");

      // Clear form
      setFormData({
        title: "",
        author: "",
        price: "",
        image: ""
      });

    } catch (error) {
      console.error(error);
      setMessage("Error adding book ❌");
    }
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "40px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px"
    }}>
      <h2>Add New Book 📘</h2>

      {message && (
        <p style={{ color: message.includes("Successfully") ? "green" : "red" }}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={formData.author}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={formData.image}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#222",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Add Book
        </button>

      </form>
    </div>
  );
}

export default AddBook;

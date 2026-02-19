import React from "react";

function Feedback() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Feedback</h2>
      <textarea placeholder="Write your feedback here..." rows="4" cols="40" />
      <br />
      <button>Submit</button>
    </div>
  );
}

export default Feedback;

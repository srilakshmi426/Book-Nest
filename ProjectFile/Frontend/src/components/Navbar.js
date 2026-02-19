import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>BookStore</h2>
      <div>
        <a href="/" style={styles.link}>Home</a>
        <a href="/About" style={styles.link}>About</a>
        <a href="/login" style={styles.link}>Login</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#0d47a1",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    color: "white"
  },
  logo: {
    margin: 0
  },
  link: {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none"
  }
};

export default Navbar;

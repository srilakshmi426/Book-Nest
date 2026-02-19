import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import UserNavbar from "./components/UserNavbar";
import AdminNavbar from "./components/AdminNavbar";

import LandingPage from "./LandingPage";
import About from "./About";
import Login from "./pages/LoginPage";
import Signup from "./pages/Signup";
import BookList from "./BookList";

import UserDashboard from "./pages/UserDashboard";
import Wishlist from "./pages/Wishlist";
import UserProfile from "./pages/UserProfile";
import Cart from "./pages/Cart";
import Feedback from "./pages/Feedback";
import AdminUsers from "./pages/AdminUsers";
import UserOrders from "./pages/UserOrders";

import AdminDashboard from "./pages/AdminDashboard";
import AdminBookList from "./pages/AdminBookList";
import AdminOrders from "./pages/AdminOrders";

import SellerLayout from "./pages/SellerLayout";
import SellerDashboard from "./pages/SellerDashboard";
import SellerProducts from "./pages/SellerProducts";
import AddBook from "./pages/AddBook";
import SellerOrders from "./pages/SellerOrders";

function App() {

  const [wishlist, setWishlist] = useState([]);

  const [orders, setOrders] = useState([
    {
      id: 1,
      productName: "Don't Let Her Stay",
      orderId: "655da8aa49",
      address: "22, Sri Apartments, Bangalore",
      buyer: "arshad",
      seller: "syed",
      bookingDate: "22/11/2023",
      deliveryDate: "29/11/2023",
      warranty: "1 year",
      price: 189,
      status: "Delivered",
      image: "https://via.placeholder.com/120x160"
    }
  ]);

  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<><Navbar /><LandingPage /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/login" element={<><Navbar /><Login /></>} />
        <Route path="/signup" element={<><Navbar /><Signup /></>} />

        {/* ================= USER ROUTES ================= */}

        <Route
          path="/books"
          element={
            <>
              <UserNavbar />
              <BookList wishlist={wishlist} setWishlist={setWishlist} />
            </>
          }
        />

        <Route
          path="/user"
          element={
            <>
              <UserNavbar />
              <UserDashboard />
            </>
          }
        />

        {/* ✅ USERS PAGE FOR USER ALSO */}
        <Route
          path="/users"
          element={
            <>
              <UserNavbar />
              <AdminUsers />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <UserNavbar />
              <UserProfile />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <UserNavbar />
              <Cart />
            </>
          }
        />

        <Route
          path="/feedback"
          element={
            <>
              <UserNavbar />
              <Feedback />
            </>
          }
        />

        <Route
          path="/user/orders"
          element={
            <>
              <UserNavbar />
              <UserOrders orders={orders} setOrders={setOrders} />
            </>
          }
        />

        {/* ================= ADMIN ROUTES ================= */}

        <Route
          path="/admin"
          element={
            <>
              <AdminNavbar />
              <AdminDashboard />
            </>
          }
        />

        <Route
          path="/admin/users"
          element={
            <>
              <AdminNavbar />
              <AdminUsers />
            </>
          }
        />

        <Route
          path="/admin/books"
          element={
            <>
              <AdminNavbar />
              <AdminBookList wishlist={wishlist} setWishlist={setWishlist} />
            </>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <>
              <AdminNavbar />
              <AdminOrders />
            </>
          }
        />

        <Route
          path="/admin/wishlist"
          element={
            <>
              <AdminNavbar />
              <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
            </>
          }
        />

        {/* ================= SELLER ROUTES ================= */}

        <Route path="/seller" element={<SellerLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<SellerDashboard />} />
          <Route path="products" element={<SellerProducts />} />
          <Route path="add-book" element={<AddBook />} />
          <Route path="orders" element={<SellerOrders />} />
        </Route>

        {/* ================= FALLBACK ================= */}

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// ✅ CREATE ORDER (Buy Now)
router.post("/", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Order creation failed", error });
  }
});

// ✅ GET ALL ORDERS (Admin Page)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Fetching orders failed", error });
  }
});

module.exports = router;

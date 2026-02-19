const express = require("express");
const router = express.Router();
const Seller = require("../models/Seller");

router.get("/allsellers", async (req, res) => {
  const sellers = await Seller.find();
  res.json(sellers);
});

module.exports = router;

const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  businessName: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("Seller", sellerSchema);

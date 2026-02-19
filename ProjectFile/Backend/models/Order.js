const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
  },
  orderId: {
    type: String,
  },
  seller: {
    type: String,
  },
  bookingDate: {
    type: String,
  },
  deliveryDate: {
    type: String,
  },
  price: {
    type: Number,
  },
  status: {
    type: String,
    default: "processing",
  },
});

module.exports = mongoose.model("Order", orderSchema);

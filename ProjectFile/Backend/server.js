const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
require("dotenv").config();

const app = express();

// ===============================
// ✅ CORS
// ===============================
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ===============================
// ✅ Ensure image folder exists
// ===============================
const imagePath = path.join(__dirname, "public/images");

if (!fs.existsSync(imagePath)) {
  fs.mkdirSync(imagePath, { recursive: true });
}

app.use("/public", express.static(path.join(__dirname, "public")));

// ===============================
// 📂 MULTER CONFIG
// ===============================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagePath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ===============================
// ✅ MongoDB Connection
// ===============================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error ❌", err));

// ===============================
// 📚 BOOK MODEL
// ===============================
const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    price: Number,
    image: String,
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "Seller" },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

// ===============================
// 🧑‍💼 SELLER MODEL
// ===============================
const sellerSchema = new mongoose.Schema(
  {
    businessName: String,
    email: { type: String, unique: true },
    password: String,
  },
  { timestamps: true }
);

const Seller = mongoose.model("Seller", sellerSchema);

// ===============================
// 🛒 ORDER MODEL
// ===============================
const orderSchema = new mongoose.Schema(
  {
    userName: String,
    productName: String,
    productImage: String,
    seller: String,
    bookingDate: String,
    deliveryDate: String,
    price: Number,
    warranty: String,
    status: {
      type: String,
      default: "Not Delivered",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

// ===============================
// 📚 BOOK APIs
// ===============================

app.get("/api/books", async (req, res) => {
  const books = await Book.find().populate("sellerId", "businessName");
  res.json(books);
});

app.post("/api/books", upload.single("image"), async (req, res) => {
  const { title, author, price, sellerId } = req.body;

  const newBook = new Book({
    title,
    author,
    price,
    sellerId,
    image: req.file ? `/public/images/${req.file.filename}` : "",
  });

  await newBook.save();
  res.json(newBook);
});

// ===============================
// 🛒 ADMIN ORDER APIs
// ===============================

// Get All Orders (Admin)
app.get("/api/orders", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// Create Order (Admin)
app.post("/api/orders", async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.status(201).json(newOrder);
});

// Update Order Status
app.put("/api/orders/:id", async (req, res) => {
  const updatedOrder = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(updatedOrder);
});

// Delete Order
app.delete("/api/orders/:id", async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: "Order deleted ✅" });
});

// ===============================
// 🛒 SELLER ORDER APIs
// ===============================

// Get Seller Orders
app.get("/api/seller/orders", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// Create Seller Order
app.post("/api/seller/orders", async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.status(201).json(newOrder);
});

// ===============================
// 🧑‍💼 SELLER APIs
// ===============================
app.post("/api/seller/register", async (req, res) => {
  const newSeller = new Seller(req.body);
  await newSeller.save();
  res.json(newSeller);
});

app.get("/api/seller", async (req, res) => {
  const sellers = await Seller.find();
  res.json(sellers);
});

// ===============================
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// ===============================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🔥`);
});

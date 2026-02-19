import express from "express";
import Book from "../models/book.js";
import multer from "multer";
import path from "path";

const router = express.Router();

/* ===============================
   MULTER STORAGE CONFIG
================================= */

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images"); // images folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

/* ===============================
   GET ALL BOOKS
================================= */

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ===============================
   ADD BOOK WITH IMAGE
================================= */

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, price } = req.body;

    const book = new Book({
      title,
      price,
      image: req.file
        ? `/public/images/${req.file.filename}`
        : "",
    });

    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;

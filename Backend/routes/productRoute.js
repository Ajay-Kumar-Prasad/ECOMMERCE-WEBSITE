const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { protect, admin } = require("../middleware/authMiddleware");
const Product = require("../models/Product");

// Create Product
router.post("/", protect, admin, async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Search Products
router.get("/search", async (req, res) => {
  try {
    const { q, category, subcategory } = req.query;
    const searchConditions = [];

    if (q) {
      const regex = new RegExp(q, "i");
      searchConditions.push({
        $or: [
          { name: regex },
          { full_name: regex },
          { category: regex },
          { subcategory: regex },
        ],
      });
    }

    if (category) searchConditions.push({ category: new RegExp(`^${category}$`, "i") });
    if (subcategory) searchConditions.push({ subcategory: new RegExp(`^${subcategory}$`, "i") });

    const finalQuery = searchConditions.length ? { $and: searchConditions } : {};
    const results = await Product.find(finalQuery).limit(20);

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


// Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get Product by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Update product
router.put("/:id",protect, admin, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete product
router.delete("/:id",protect, admin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createProduct,
  getProducts,
  getProductById,
} = require("../controllers/productController");

// @desc    Get all products (optional category/subcategory filter)
// @route   GET /api/products?category=men&subcategory=formals
// @access  Public
router.get("/", getProducts);

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
router.get("/:id", getProductById);

// @desc    Create new product
// @route   POST /api/products
// @access  Private (Admin or logged-in)
router.post("/", protect, createProduct);

module.exports = router;

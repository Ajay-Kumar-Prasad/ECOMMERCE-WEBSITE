const Product = require("../models/Product");

// @desc    Get all products with search & category/subcategory filter
// @route   GET /api/products?search=shirts
// @access  Public
const getProducts = async (req, res) => {
  try {
    const { category, subcategory, search } = req.query;

    let filter = {};

    if (category) filter.category = category.toLowerCase();
    if (subcategory) filter.subcategory = subcategory.toLowerCase();
    if (search) filter.name = { $regex: search, $options: 'i' }; // case-insensitive search

    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new product
// @route   POST /api/products
// @access  Private
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};

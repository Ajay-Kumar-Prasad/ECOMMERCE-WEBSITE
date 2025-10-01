require('dotenv').config(); 
const mongoose = require("mongoose");
const Product = require("../models/Product");
const all_products = require("../data/All_Product"); 

mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("Connected to MongoDB");

    // Optional: clear old products
    await Product.deleteMany({});

    // Insert all products
    all_products.forEach((product, index) => {
        if (!product.name || !product.category || !product.new_price) {
          console.error(`Product at index ${index} (id: ${product.id}) is missing required fields`);
        }
    });      
    await Product.insertMany(all_products);

    console.log("All products have been inserted!");
    process.exit();
  })
  .catch((err) => {
    console.error("Database connection failed", err);
    process.exit(1);
  });

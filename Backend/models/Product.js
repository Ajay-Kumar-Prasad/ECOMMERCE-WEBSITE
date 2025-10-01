const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  full_name: { type: String },
  brand_name: { type: String },
  category: { 
    type: String, 
    required: true 
}, // men, women, kids
  subcategory: { type: String },
  description: { type: String },
  image: { type: String },
  new_price: { 
    type: Number, 
    required: true 
},
  old_price: { type: Number },
  discount: { type: String },
  rating: { 
    type: Number,
    default: 0 
}
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

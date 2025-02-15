const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = new Schema({
    productId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Product", 
        required: true,
    },
    size:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    owner:{
        type: Schema.Types.ObjectId, ref:"User"
    }
})
const Cart = mongoose.model("Cart",cartSchema);
module.exports = Cart;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    full_name:{
        type:String,
        required:true,
    },
    brand_name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    category:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    discount:{
        type:String,
    },
    rating:{
        type:Number,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    }
});
const Product = mongoose.model("Product",productSchema);
module.exports = Product;

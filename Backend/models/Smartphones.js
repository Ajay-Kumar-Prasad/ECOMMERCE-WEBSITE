const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const smartphoneSchema = new Schema({
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    new_price:{
        type:String,
        required:true,
    },
    link:{
        type:String,
        required:true,
    },
    available:{
        type:Boolean,
        default:true,
    }
});
const Smartphones = mongoose.model("Smartphones",smartphoneSchema);
module.exports = Smartphones;

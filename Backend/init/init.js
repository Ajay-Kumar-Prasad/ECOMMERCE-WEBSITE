const mongoose = require('mongoose');
const Product = require("./models/Product");
const initData = require("../E-commerce-Website/src/ContextAPI/All_Product");
const initData2 = require("../E-commerce-Website/src/ContextAPI/DATA/data");
const initData3 = require("../E-commerce-Website/src/ContextAPI/Related_data");
const Smartphones = require("./models/Smartphones");
// Database connection with MongoDB
main()
    .then(()=>{
        console.log("connected to database");
    })
    .catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb+srv://ajayk10440:ngqLGckQzlGLM4em@cluster0.eo2ep.mongodb.net/e-commerce");
}
const initDb = async () => {
    await Product.deleteMany({});   
    initData.data = initData.data.map((obj) => ({
        ...obj
    }));
    await Product.insertMany(initData.data);
    await Smartphones.insertMany(initData2.data);
    console.log("data was initialised");
}
initDb();
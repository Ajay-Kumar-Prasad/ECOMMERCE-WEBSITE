require('dotenv').config(); 
const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

app.use(cors({
    origin: ["http://localhost:3000","https://ecommerce-website-frontend-4ec2.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// app.use(cors());
const Product = require('./models/Product');
app.use(express.json());
// app.use(express.static(path.join(__dirname, '../Frontend/build')));
main()
    .then(()=>{
        console.log("connected to database");
    })
    .catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}
app.get("/", (req, res) => {
    res.send("🚀 Backend is running!");
});
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// Get single product by ID
app.get('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.use('/api/auth', require('./routes/authRoute'));

//API Creation
app.listen(port, (err) => {
    if(!err){
    console.log(`app is listening to port: ${port}`);
    }
    else console.log(err);
});

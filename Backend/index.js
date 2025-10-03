require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://ecommerce-website-frontend-4ec2.onrender.com"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// Routes
const productRoutes = require("./routes/productRoute");
const authRoutes = require("./routes/authRoute");

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

const adminRoutes = require("./routes/adminRoute");
app.use("/api/admin", adminRoutes);

// Test route
app.get("/", (req, res) => res.send("🚀 Backend is running!"));

// Start server
app.listen(port, () => console.log(`Server listening on port ${port}`));

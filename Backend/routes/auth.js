const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

router.post("/signup", async (req,res) => {
    try{
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exists' });
        const hashPassword = await bcrypt.hash(password,10);
        user = new User({name,email, password:hashPassword});
        await user.save();
        res.cookie('token', token, { httpOnly: true });
        console.log(user);
    } catch {
        console.log('Some Error Ocurred!');
    }
});
router.post("/login" , async (req,res) => {
    try{
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    }catch{
        res.status(500).json({ message: 'Server error' });
    }
})
module.exports = router;
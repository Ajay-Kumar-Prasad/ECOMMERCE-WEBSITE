const express = require("express");
const router = express.Router();
const User = require("../models/user");

// TEMP: Make user admin
router.put("/make-admin/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.isAdmin = true;
    await user.save();

    res.status(200).json({ message: `${user.name} is now admin`, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

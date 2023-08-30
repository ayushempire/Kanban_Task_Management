const express = require("express");
const router = express.Router();
const User = require("../Models/User");

router.post("/createuser", async (req, res) => {
  try {
    await User.create({
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ seccess: false });
  }
});

module.exports = router;

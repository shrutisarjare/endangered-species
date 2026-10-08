const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    await Contact.create({ name, email, message });

    return res.status(201).json({
      message: "Thank you for contacting us!",
    });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;

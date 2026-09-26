const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

/* =========================
   REGISTER USER (FINAL)
   ========================= */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 🔍 Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // 🔥 Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format"
      });
    }

    // 🔍 Check if user exists
    const userExists = await User.findOne({ email: email.toLowerCase() });
    if (userExists) {
      return res.status(400).json({
        message: "User already exists. Please login."
      });
    }

    // 🔥 Only one admin allowed
    if (role === "admin") {
      const adminExists = await User.findOne({ role: "admin" });
      if (adminExists) {
        return res.status(400).json({
          message: "Admin already exists"
        });
      }
    }

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create user
    await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: role || "user"
    });

    return res.status(201).json({
      message: "Registration successful"
    });

  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return res.status(500).json({
      message: "Server error"
    });
  }
});

/* =========================
   LOGIN USER (FINAL)
   ========================= */
router.post("/login", async (req, res) => {
  const { email, password, role } = req.body;   // 🔥 ADDED role

  try {
    // 🔍 Check user exists
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({
        message: "User not found. Please register first."
      });
    }

    // 🔥 NEW: Block wrong role login
    if (role === "admin" && user.role !== "admin") {
      return res.status(403).json({
        message: "Not allowed to login as admin"
      });
    }

    // 🔐 Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    // 🔑 Create JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // ✅ Response (unchanged except _id)
    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return res.status(500).json({
      message: "Server error"
    });
  }
});

module.exports = router;
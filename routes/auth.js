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

    // 🔍 Check if user exists
    const userExists = await User.findOne({ email: email.toLowerCase() });
    if (userExists) {
      return res.status(400).json({
        message: "User already exists. Please login."
      });
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
  const { email, password } = req.body;

  try {
    // 🔍 Check user exists
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({
        message: "User not found. Please register first."
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

    // ✅ Success response
    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
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

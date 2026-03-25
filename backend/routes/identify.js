const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/text", async (req, res) => {

  try {

    const { text } = req.body;

    const response = await axios.post(
      "http://127.0.0.1:8000/identify-text",
      { text }
    );

    res.json(response.data);

  } catch (error) {

    console.error(error);
    res.status(500).json({
      error: "ML service failed"
    });

  }

});

module.exports = router;
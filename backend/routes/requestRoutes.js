const express = require("express");
const axios = require("axios");
const Request = require("../models/Request");

const router = express.Router();

router.post("/send", async (req, res) => {
  const { method, url, headers, params, body } = req.body;

  const start = Date.now();

  try {
    const response = await axios({
      method,
      url,
      headers,
      params,
      data: body,
    });

    const saved = await Request.create({
      method,
      url,
      headers,
      params,
      body,
      response: response.data,
      status: response.status,
      responseTime: Date.now() - start,
    });

    res.json(saved);
  } catch (err) {
    res.status(500).json({
      error: err.message,
      response: err.response?.data,
    });
  }
});

router.get("/history", async (req, res) => {
  const history = await Request.find().sort({ createdAt: -1 });
  res.json(history);
});

module.exports = router;

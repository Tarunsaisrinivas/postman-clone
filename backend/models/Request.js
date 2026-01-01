
const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  name: String,
  method: String,
  url: String,
  headers: Object,
  params: Object,
  body: Object,
  response: Object,
  status: Number,
  responseTime: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Request", requestSchema);

// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./utils/db");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/request", require("./routes/requestRoutes"));

app.listen(5000, () => console.log("Server running on 5000"));

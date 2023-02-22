const express = require("express");
const _ = express.Router();
const authRoutes = require("./auth");

// auth routes
_.use("/auth", authRoutes);

module.exports = _;

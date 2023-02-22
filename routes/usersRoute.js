const express = require("express");
const _ = express.Router();

_.get("/", function (req, res) {
  res.send("ami router");
});

module.exports = _;

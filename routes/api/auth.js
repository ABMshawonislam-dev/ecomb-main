const express = require("express");
const _ = express.Router();
const User = require("../../models/user.js");
var jwt = require("jsonwebtoken");
const { sendVerificationEmail } = require("../../utils/emailSender.js");

// registration
_.post("/registration", async (req, res) => {
  let { email, phoneNumber, firstName, lastName, password } = req.body;

  if (!email) {
    return res.json({ error: "You must enter an email address" });
  }

  if (!firstName) {
    return res.json({ error: "You must enter an firstName" });
  }

  if (!lastName) {
    return res.json({ error: "You must enter an lastName" });
  }

  if (!password) {
    return res.json({ error: "You must enter an password" });
  }

  let duplicateEmail = await User.find({ email: email });

  if (duplicateEmail) {
    return res.json({ error: "Already email exists" });
  }

  const user = new User({
    email,
    phoneNumber,
    firstName,
    lastName,
    password,
  });

  user.save();

  let username = user.firstName + user.lastName;

  let token = jwt.sign({ email: user.email }, ">@H%rH@>MDW(N72", {
    expiresIn: "1h",
  });

  sendVerificationEmail(user.email, username, token);

  res.json(user);
});

module.exports = _;

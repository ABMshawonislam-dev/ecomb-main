require("dotenv").config();
const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const routes = require("./routes");
const setupDB = require("./config/dbConfig");
const app = express();

console.log(process.env.BASE_URL);

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
setupDB();
app.use(routes);

app.listen(3000, function () {
  console.log(chalk.bgBlue("Port Running On 3000"));
});

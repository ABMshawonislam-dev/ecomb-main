const mongoose = require("mongoose");
const chalk = require("chalk");

const setupDB = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB_URL, () => {
    console.log(chalk.bgGreen("Db Connected"));
  });
};

module.exports = setupDB;

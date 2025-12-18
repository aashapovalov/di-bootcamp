const chalk = require("chalk");

function displayMessage() {
  const message = "Welcome to Challenge";
  console.log(chalk.yellow(message));
}

module.exports = displayMessage;
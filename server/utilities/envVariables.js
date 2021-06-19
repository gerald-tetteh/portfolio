const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, "..", ".env"),
});
const config = {};

config.secretKey = process.env.SESSION_SECRET;
config.mailAuth = process.env.MAIL_AUTH;

module.exports = config;

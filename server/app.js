const path = require("path");

const express = require("express");
const session = require("express-session");
const csurf = require("csurf");

const app = express();

require("dotenv").config({
  path: path.join(__dirname, "..", "server", ".env"),
});

app.use(express.json());
app.use(session({}));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server Running");
});

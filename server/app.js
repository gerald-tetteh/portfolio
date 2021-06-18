const path = require("path");

const express = require("express");
const app = express();

require("dotenv").config({
  path: path.join(__dirname, "..", "server", ".env"),
});

app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server Running");
});

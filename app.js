const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home/home");
});

app.get("/stereobeats", (req, res) => {
  res.render("projects/stereo_beats");
});

app.get("/qr-scanner/privacy-policy", (req, res) => {
  res.render("privacy");
});

app.get("*", (req, res) => {
  res.render("error_page");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server Running");
});

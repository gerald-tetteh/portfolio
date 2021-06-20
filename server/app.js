const path = require("path");

const express = require("express");
const session = require("express-session");
const csurf = require("csurf");

const adminRoutes = require("./routes/admin");
const homeRoutes = require("./routes/home");
const generalRoutes = require("./routes/general");
const qrScannerRoutes = require("./routes/qrScanner");
const config = require("./utilities/envVariables");

const app = express();
const csrfProtection = csurf();

app.use(express.json());
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "..", "client", "build")));
app.use(
  session({
    secret: config.secretKey,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(csrfProtection);

app.use("/admin", adminRoutes);
app.use(homeRoutes);
app.use(generalRoutes);
app.use("/qr-scanner", qrScannerRoutes);
app.use("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

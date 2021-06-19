const express = require("express");
const session = require("express-session");
const csurf = require("csurf");

const adminRoutes = require("./routes/admin");
const homeRoutes = require("./routes/home");
const config = require("./utilities/envVariables");

const app = express();
const csrfProtection = csurf();

app.use(express.json());
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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server Running");
});

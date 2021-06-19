// admin routes
const express = require("express");
const router = express.Router();

const adminControllers = require("../controllers/admin");

router.get("/csrf", adminControllers.getCsrf);

module.exports = router;

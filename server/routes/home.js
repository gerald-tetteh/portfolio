const express = require("express");
const router = express.Router();

const homeControllers = require("../controllers/home");

router.post("/chat", homeControllers.postChat);

module.exports = router;

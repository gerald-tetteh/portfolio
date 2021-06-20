// general routes (non-view routes)
const express = require("express");

const generalControllers = require("../controllers/general");

const router = express.Router();

router.get("/cv", generalControllers.getCv);
router.get("/app-ads.txt", generalControllers.getAppAdsText);

module.exports = router;

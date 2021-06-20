// QR Code Scanner routes
const express = require("express");

const qrScannerControllers = require("../controllers/qrScanner");

const router = express.Router();

router.get("/privacy-policy", qrScannerControllers.getPrivacyPolicy);

module.exports = router;

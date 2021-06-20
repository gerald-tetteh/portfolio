// QR Code Scanner Controllers
const path = require("path");

exports.getPrivacyPolicy = (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "..", "public", "documents", "qr_privacy_policy.html")
  );
};

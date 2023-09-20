// general routes controllers
const path = require("path");

exports.getAppAdsText = (req, res, next) =>
  res.sendFile(
    path.join(__dirname, "..", "public", "documents", "app-ads.txt")
  );
exports.getCv = (req, res, next) =>
  res.download(
    path.join(
      __dirname,
      "..",
      "public",
      "documents",
      "Addo-Tetteh,Gerald - cv.pdf"
    )
  );

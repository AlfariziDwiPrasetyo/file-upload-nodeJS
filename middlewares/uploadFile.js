const multer = require("multer");

const uploadFile = multer({
  dest: "public/images",
  limits: 10000000, //10MB
  fileFilter(req, file, cb) {
    if (
      file.originalname.endsWith(".png") ||
      file.originalname.endsWith(".jpg")
    ) {
      //success
      cb(null, true);
    } else {
      //failed
      cb("Please input the file with .png or .jpg ext", false);
    }
  },
});

module.exports = uploadFile;

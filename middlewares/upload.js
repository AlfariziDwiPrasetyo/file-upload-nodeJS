const multer = require("multer");
const storage = require("../config/cloudinaryConfig");

const upload = multer({ storage });

module.exports = upload;

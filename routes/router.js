const express = require("express");
const home = require("../controllers/home");
const uploadImage = require("../controllers/uploadImage");
const upload = require("../middlewares/upload");
const images = require("../controllers/images");

const router = express.Router();

// home route
router.get("/home", home);

//show all images
router.get("/images", images);

//upload post route
router.post("/upload", upload.single("file"), uploadImage);

module.exports = router;

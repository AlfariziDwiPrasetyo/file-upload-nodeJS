const express = require("express");
const home = require("../controllers/home");
const uploadImage = require("../controllers/uploadImage");
const upload = require("../middlewares/upload");

const router = express.Router();

// home route
router.get("/home", home);

//upload post route
router.post("/upload", upload.single("file"), uploadImage);

module.exports = router;

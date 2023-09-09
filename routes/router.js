const express = require("express");
const home = require("../controllers/home");
const uploadImage = require("../controllers/uploadImage");
const uploadFile = require("../middlewares/uploadFile");

const router = express.Router();

// home route
router.get("/home", home);

//upload post route
router.post("/upload", uploadFile.single("file"), uploadImage);

module.exports = router;

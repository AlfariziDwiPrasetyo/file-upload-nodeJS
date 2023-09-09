const express = require("express");
const home = require("../controllers/home");
const uploadImage = require("../controllers/uploadImage");

const router = express.Router();

// home route
router.get("/home", home);

//upload post route
router.post("/upload", uploadImage);

module.exports = router;

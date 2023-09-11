const mongoose = require("mongoose");
const db = require("./connect");

const imageSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
});

const ImageDb = mongoose.model("Image", imageSchema);

module.exports = ImageDb;

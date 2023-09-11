const ImageDb = require("../models/imageSchema");

const images = async (req, res) => {
  const allImage = await ImageDb.find();
  res.render("images", { allImage });
};

module.exports = images;

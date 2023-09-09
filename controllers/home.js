const ImageDb = require("../models/imageSchema");

const home = (req, res) => {
  res.render("home");
};

module.exports = home;

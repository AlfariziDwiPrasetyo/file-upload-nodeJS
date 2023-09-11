const ImageDb = require("../models/imageSchema");

const uploadImage = async (req, res) => {
  console.log(req.file);
  const uploadedImage = req.file.path;
  const uploadToDb = await ImageDb.create({
    path: uploadedImage,
  });
  res.redirect("images");
};

module.exports = uploadImage;

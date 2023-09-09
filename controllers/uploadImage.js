const uploadImage = (req, res) => {
  console.log(req.file);
  res.json({
    msg: "File Uploaded Succesfully",
  });
};

module.exports = uploadImage;

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dpilobwsf",
  api_key: "525674448659486",
  api_secret: "1iW2nUVfrM27sjFzgS81Gc9q1Fw",
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: [".png", ".jpg"],
  params: {
    folder: "nodeJS",
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

module.exports = storage;

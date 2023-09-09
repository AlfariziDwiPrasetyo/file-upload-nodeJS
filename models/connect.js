const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://yoerdanatan:sDHm0dnXmwW9vpPd@blogapp.coaqzo5.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Db Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

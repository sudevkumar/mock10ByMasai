const mongoose = require("mongoose");

const conection = mongoose.connect(
  "mongodb+srv://sudev:sudev@cluster0.borcr1d.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = { conection };

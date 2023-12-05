const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define um novo schema no MONGODB
const PictureSchema = new Schema({
    name: { type: String, require: true },
    src: { type: String, require: true }
});

module.exports = mongoose.model("Picture", PictureSchema);
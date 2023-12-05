const express = require("express");
const upload = require("../config/multer"); // Configurações para possibilitar o upload de imagens
const router = express.Router();

const PictureController = require("../controllers/pictureController");

router.post("/", upload.single("file"), PictureController.create);

module.exports = router;
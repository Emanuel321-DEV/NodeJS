const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, "src/uploads/") // Local em que a imagem será salva no server
    },
    filename: (request, file, callback) => {
        callback(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

module.exports = upload;
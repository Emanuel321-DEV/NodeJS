require("dotenv").config(); 
require("./src/db");
const pictureRouter = require("./src/routes/picture");

const express = require("express");
const app = express();

app.use("/pictures",  pictureRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Backend started on port ${port} !`);
});
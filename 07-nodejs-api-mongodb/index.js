const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const uri = process.env.MONGO_URI;

// Configs JSON
app.use( express.urlencoded({
    extended: true,
}));
app.use(express.json());

// Routes
const personRoutes = require("./src/routes/personRoutes");
app.use("/person", personRoutes);

// Connection DB
mongoose.connect(uri)
.then(() => {
    console.log("Connection successfull");
    app.listen(3000, () => { console.log("API NodeJS started! ") })
}).catch((error) => {
    console.log("Erro connection with MongoDB " , error);
});
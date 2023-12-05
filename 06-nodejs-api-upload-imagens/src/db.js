const mongoose = require("mongoose");
require("dotenv").config(); // Possibilita o uso de variáveis de ambiente

// Função que estabelece a conexão com Banco de Dados
async function main(){
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection established successfully");
}

main().catch(err => console.log(err));

module.exports = main;
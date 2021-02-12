const mongoose = require("mongoose") 

function connect(){
    mongoose
    .connect("mongodb://localhost/migration", {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Conectado com o Banco de Dados");
    })
    .catch((error) => {
        console.log(`Erro ao tentar a conexão com Banco de Dados. Erro: ${error}`);
    });
}

module.exports = connect()
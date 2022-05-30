// Carregando módulos
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const path = require('path')
const locatario = require("./routes/Locatario")
const partida = require('./Backend/routes/Partida')

// Configurações
    // Body Parser
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    // Public
    app.use(express.static(path.join(__dirname,"frontend")))

// Rotas
    app.get('/', function(req,res){
        res.sendFile(__dirname + "/frontend/Tela_inicial/index.html")
    })
     
    app.use('/homeLocatario', locatario)
    app.use('/cadastroQuadra', locatario)

    app.use('/partida',partida)

// Outros
const PORT = 8081
app.listen(PORT,()=>{
    console.log("Servidor rodando em http://localhost:8081")
})

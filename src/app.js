// Carregando módulos
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const path = require('path')
const locatario = require("./Backend/routes/Locatario")
const atleta = require('./Backend/routes/Atleta')
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
     
   app.use('/locatario',locatario)

   app.use('/atleta',atleta)

    app.use('/partida',partida)

// Outros
const PORT = 8081
app.listen(PORT,()=>{
    console.log("Servidor rodando em http://localhost:8081")
})

// Carregando módulos
const express = require('express')
//const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express();
const path = require('path')
const partida = require('./Backend/routes/Partida')

// Configurações
    // Body Parser
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    // Handlebars
    //app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    //app.set('view engine','handlebars')
    // Public
    app.use(express.static("frontend/Tela_inicial"))

// Rotas
    app.get('/', function(req,res){
        res.sendFile(__dirname + "/frontend/Tela_inicial/index.html")
    })

    app.use('/partida',partida)

// Outros
const PORT = 8081
app.listen(PORT,()=>{
    console.log("Servidor rodando em http://localhost:8081")
})

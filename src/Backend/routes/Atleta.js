const express = require("express")
const app = express();
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser');//SERVE PARA RECEBER O FORMULÁRIO
const atleta = require('../Models/Atleta')//PUXA A TABELA ATLETA


//CONFIG BODY-PARSER -> pegar dados do  formularios 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// estrutura para pegar os dados: -> req.body.(nome do input)-> atribui os nomes para os inputs com o atributo name




router.get('/', (req, res)=>{
    res.send("Pagina pricipal do Atleta")
})

//ROTA PARA A PAGINA HOME DO ATLETA:

router.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'Home', 'homeAtleta.html'))
})


//ROTA PARA A PAGINA DE CADASTRO
router.get('/cadastrar',(req,res)=>{
   res.sendFile(path.join(__dirname, '../', '../','frontend', 'CadastroUser', 'CadastroAtleta.html'))
})

//ROTA PARA RECEBER OS DADOS DE CADASTRO DO ATLETA:
router.post('/cadastroRecebido',(req,res)=>{

    //CRIANDO USUÁRIO ATLETA:
    atleta.create({
        EmailAtleta: req.body.email,
        Nome: req.body.nome,
        Senha: req.body.senha,
        DataNascimento: req.body.data,
        Sexo: req.body.sexo
    }).then(function(){
        res.send("DADOS RECEBIDOS")
    }).catch((erro)=>{
        res.send("Deu um erro!" + erro)
    })
})


module.exports = router
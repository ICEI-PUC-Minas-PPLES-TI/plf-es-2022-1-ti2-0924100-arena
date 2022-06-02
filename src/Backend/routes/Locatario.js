const express = require("express")
const app = express();
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser');//SERVE PARA RECEBER O FORMULÁRIO
const locatario = require('../Models/Locatario')//PUXA O MODELS LOCATARIO
const quadra = require('../Models/Quadra')//PUXA O MODELS QUADRA
const esporte = require('../Models/Esporte')//PUXA O MODELS ESPORTE
const esporteQuadra = require('../Models/EsporteQuadra');//PUXA O MODELS EPORTEQUADRA




//CONFIG BODY-PARSER -> pegar dados do  formularios 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// estrutura para pegar os dados: -> req.body.(nome do input)-> atribui os nomes para os inputs com o atributo name

//ROTA PARA CADASTRAR QUADRA:
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'Cadastro_quadra', 'Cadastro_quadra.html'))
})
//ROTA PARA RECEBER DADOS DO FORMULARIO DE CADASTRO DA QUADRA:
router.post('/quadraCadastrada',(req,res)=>{

    //CRIANDO QUADRA LOCATÁRIO:
    quadra.create({
        EmailLocatario: req.body.invisivel ,
        NomeQuadra: req.body.nomeQuadra,
        CEP: req.body.Cep,
        Numero: req.body.numero,
        Capaidade: req.body.capacidade,
        Preco: req.body.campopreco,

    }).then(()=>{
        res.send("Cadastro realizado com sucesso!")
    }).catch((erro)=>{
        res.send("Nao foi possivel realizar o cadastro!" + erro)
    })
 })

//ROTA PARA A HOME DO LOCATARIO:
router.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'Home', 'homeLocatario.html'))
})

//ROTA PARA CADASTRAR LOCATARIO:
router.get('/cadastrar',(req,res)=>{
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'CadastroUser', 'CadastroLocatario.html'))
 })

 //ROTA PARA RECEBER DADOS DO FORMULARIO DE CADASTRO DO LOCATARIO:
 router.post('/cadastroRecebido',(req,res)=>{

    //CRIANDO USUÁRIO LOCATÁRIO:
    locatario.create({
        EmailLocatario: req.body.email,
        Nome: req.body.nome,
        Senha: req.body.senha,
        Contato: req.body.contato,
        DataNascimento: req.body.data,
        TipoChavePix: req.body.chavePix,//TIPO DA CHAVE:
        ChavePix: req.body.pix

    }).then(()=>{
        res.send("Cadastro realizado com sucesso!")
    }).catch((erro)=>{
        res.send("Nao foi possivel realizar o cadastro!" + erro)
    })
 })
 

module.exports = router
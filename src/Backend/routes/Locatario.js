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


    let checkFutebol = req.body.checkFutebol
    let checkVolei = req.body.checkVolei
    let checkBasquete = req.body.checkBasquete
    let checkFutevolei = req.body.checkFutevolei
    let checkTenis = req.body.checkTenis
    
    //CRIANDO QUADRA LOCATÁRIO:
    var invisivel = req.body.invisivel;
    var nomeQuadra = req.body.nomeQuadra;
    var CEP= req.body.Cep;
    var numero = req.body.numero;
    var capacidade = req.body.capacidade;
    var preco = req.body.campopreco;
    var arreyEsportes= [];

    if(checkFutebol != undefined){
        arreyEsportes.push("1")
    }
    if(checkVolei != undefined){
        arreyEsportes.push("2")
    }
    if(checkBasquete != undefined){
        arreyEsportes.push("3")
    }
    if(checkFutevolei != undefined){
        arreyEsportes.push("4")
    }
    if(checkTenis != undefined){
        arreyEsportes.push("5")
    }
    console.log("async")
    (async function cadastro (){
        
        const novaQuadra = await quadra.create({
            EmailLocatario: invisivel ,
            NomeQuadra: nomeQuadra,
            CEP: CEP,
            Numero: numero,
            Capacidade: capacidade,
            Preco: preco
    })
    cadastro()
        console.log("Criou a quadra")
            console.log("começou esporte")
            
              console.log("achou o id")
              console.log(novaQuadra)
              console.log(novaQuadra.NomeQuadra)
              console.log(novaQuadra.CodigoQuadra)
                esporteQuadra.create({
                IdEsporte: arreyEsportes[0],
                CodigoQuadra: novaQuadra.CodigoQuadra 
            },
            console.log("criou dnv")
            ).then(()=>{
                res.send("Cadastro realizado com sucesso!")
            })

        
    

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
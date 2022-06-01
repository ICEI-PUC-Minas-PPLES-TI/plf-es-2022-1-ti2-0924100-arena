const express = require("express")
const app = express();
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser');//SERVE PARA RECEBER O FORMULÁRIO
const locatario = require('../Models/Locatario')//PUXA O MODELS LOCATARIO


//CONFIG BODY-PARSER -> pegar dados do  formularios 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// estrutura para pegar os dados: -> req.body.(nome do input)-> atribui os nomes para os inputs com o atributo name


router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'Cadastro_quadra', 'Cadastro_quadra.html'))
})



router.post('/add', function(req, res){
    res.send("Teste do BD: ");
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
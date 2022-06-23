const express = require("express")
const app = express();
const router = express.Router()
const path = require('path')
const db = require('../Models/db')
const bodyParser = require('body-parser');//SERVE PARA RECEBER O FORMULÁRIO
const locatario = require('../Models/Locatario')//PUXA O MODELS LOCATARIO
const quadra = require('../Models/Quadra')//PUXA O MODELS QUADRA
const esporte = require('../Models/Esporte')//PUXA O MODELS ESPORTE
const esporteQuadra = require('../Models/EsporteQuadra');//PUXA O MODELS EPORTEQUADRA
const res = require("express/lib/response");
const console = require("console");
const partida = require('../Models/Partida') //PUXA O MODELS PARTIDAS
const disponibilidadeQuadra = require('../Models/DisponibilidadeQuadra')
const pagamento = require("../Models/Pagamento");
const reclamacao = require('../Models/Reclamacao')


const {QueryTypes} = require('sequelize')
const {sequelize,Sequelize} = require('../Models/db');


//CONFIG BODY-PARSER -> pegar dados do  formularios 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// estrutura para pegar os dados: -> req.body.(nome do input)-> atribui os nomes para os inputs com o atributo name

//ROTA PARA CADASTRAR QUADRA:
router.get('/cadastrar/quadra/:email', (req, res) => {
    res.render('cadastroQuadra', {email: req.params.email})
})
//ROTA PARA RECEBER DADOS DO FORMULARIO DE CADASTRO DA QUADRA:
router.post('/quadraCadastrada/:email', (req, res) => {


    let checkFutebol = req.body.checkFutebol
    let checkVolei = req.body.checkVolei
    let checkBasquete = req.body.checkBasquete
    let checkFutevolei = req.body.checkFutevolei
    let checkTenis = req.body.checkTenis
    //CRIANDO QUADRA LOCATÁRIO:
    var invisivel = req.params.email;
    var nomeQuadra = req.body.nomeQuadra;
    var CEP = req.body.Cep;
    var numero = req.body.numero;
    var capacidade = req.body.capacidade;
    var preco = req.body.campopreco;
    var arreyEsportes = [];
    
    var arreyDias = req.body.invisivel2
    var HorarioInicio = req.body.timeInicio
    var HorarioFim = req.body.timeFim
    arreyDias = JSON.parse(arreyDias)

    if (checkFutebol != undefined) {
        arreyEsportes.push("1")
    }
    if (checkVolei != undefined) {
        arreyEsportes.push("2")
    }
    if (checkBasquete != undefined) {
        arreyEsportes.push("3")
    }
    if (checkFutevolei != undefined) {
        arreyEsportes.push("4")
    }
    if (checkTenis != undefined) {
        arreyEsportes.push("5")
    }
    var ultimo
    teste()
    function teste() {
        quadra.create({
            EmailLocatario: invisivel,
            NomeQuadra: nomeQuadra,
            CEP: CEP,
            Numero: numero,
            Capacidade: capacidade,
            Preco: preco
        }).then(function () {
            acharUtimo()
            async function acharUtimo() {
                ultimo = await quadra.findOne({
                    order: [
                        ["CodigoQuadra", "DESC"]
                    ]
                }
                )
                let stringUltimo = JSON.stringify(ultimo)
                let split1 = stringUltimo.split(',')
                let split2 = split1[0].split(':')
                for (let i = 0; i < arreyEsportes.length; i++) {
                    esporteQuadra.create({
                        IdEsporte: arreyEsportes[i],
                        CodigoQuadra: split2[1]
                    })
                }
                
                for(let i=0; i<arreyDias.length; i++){
                    disponibilidadeQuadra.create({
                        Data: arreyDias[i],
                        CodigoQuadra: split2[1],
                        HorarioInicio: HorarioInicio,
                        HorarioFim: HorarioFim,
                        Alugado: 0
                    })
                }


                res.redirect('/locatario/home/' +  req.params.email)
            }
        })
    }
})


//ROTA PARA A HOME DO LOCATARIO:
router.get('/home/:email', (req, res) => {
    // res.sendFile(path.join(__dirname, '../', '../','frontend', 'Home', 'homeLocatario.html'))
    quadra.findAll({
        raw: true,
        where: {
            EmailLocatario: req.params.email
        }
    }).then((quadras) => {
        res.render('homeLocatario', { quadras, email:req.params.email })

    })
})
//ROTA PARA CADASTRAR LOCATARIO:
router.get('/cadastrar', (req, res) => {
    res.render('cadastroLocatario')
})

//ROTA PARA RECEBER DADOS DO FORMULARIO DE CADASTRO DO LOCATARIO:
router.post('/cadastroRecebido', (req, res) => {

    //CRIANDO USUÁRIO LOCATÁRIO:

    locatario.create({
        EmailLocatario: req.body.email,
        Nome: req.body.nome,
        Senha: req.body.senha,
        Contato: req.body.contato,
        DataNascimento: req.body.data,
        TipoChavePix: req.body.chavePix,//TIPO DA CHAVE:
        ChavePix: req.body.pix

    }).then(() => {
        res.redirect('/Locatario/home/' + req.body.email)
    }).catch((erro) => {
        res.send("Nao foi possivel realizar o cadastro!" + erro)
    })
})

//ROTA VER OS AGENDAMENTOS DE UMA DETERMINADA QUADRA
router.get('/agendamentos/:idQuadra/:idLocatario', async (req, res) => {
    
    let partidas = await sequelize.query(`select * from partidas  WHERE CodigoQuadra = ${req.params.idQuadra};`,{type: QueryTypes.SELECT})
    let quadra = await sequelize.query(`select * from quadras  WHERE CodigoQuadra = ${req.params.idQuadra};`,{type: QueryTypes.SELECT})
    
    res.render('Agendamentos', { partidas: partidas, 
        quadra: quadra,
        idQuadra: req.params.idQuadra,
        email: req.params.idLocatario })
})

//ROTA PARA VER OS PAGEMENTOS DOS ATLETAS
router.get('/pagamentos/:idQuadra/:idLocatario/:idPartida', async(req,res)=>{

    let pagamentos = await sequelize.query(`select * from pagamentos  WHERE CodigoPartida = ${req.params.idPartida};`,{type: QueryTypes.SELECT})
    res.render('PagVisaoLocatario',{
        idQuadra: req.params.idQuadra,
        idLocatario: req.params.idLocatario,
        idPartida: req.params.idPartida,
        pagamentos: pagamentos
    })
})


//ROTA DE CONFIRMAÇÃO DE PAGAMENTO:
router.post("/pagamentoConfirmado/:idQuadra/:idLocatario/:idPartida",(req,res)=>{

    pagamento.findOne({ _CodigoPartida: req.params.idPartida, _EmailAtleta: req.body.email })
    .then((pagamento)=>{
        pagamento.Pago = 'Confirmado'
    
        pagamento.save().then(()=>{
            res.redirect('/locatario/pagamentos/' +  req.params.idQuadra + '/' + req.params.idLocatario + '/' + req.params.idPartida )
        })
    })


})


//ROTA PARA O LOCATARIO EXPLICAR A RECUSA:
router.get('/recusado/:idQuadra/:idLocatario/:idPartida/:idAtleta',(req,res)=>{
    res.render('recusaLocatario',{
        idQuadra: req.params.idQuadra,
        idLocatario: req.params.idLocatario,
        idPartida: req.params.idPartida,
        idAtleta: req.params.idAtleta
    })
})

//ROTA PARA RECEBER AS INFORMAÇÕES DA RECUSA DO PAGAMENTO:
router.post('/recusaRecebido/:idQuadra/:idLocatario/:idPartida/:idAtleta' ,(req,res)=>{
    reclamacao.create({
        EmailAtleta: req.params.idAtleta,
        CodigoPartida: req.params.idPartida,
        EmailLocatario: req.params.idLocatario,
        Motivo: req.body.conteudo
    })
    pagamento.findOne({ _CodigoPartida: req.params.idPartida, _EmailAtleta: req.params.idAtleta })
    .then((pagamento)=>{
        pagamento.Pago = 'Recusado'
    
        pagamento.save().then(()=>{
            res.redirect('/locatario/pagamentos/' +  req.params.idQuadra + '/' + req.params.idLocatario + '/' + req.params.idPartida )
        })

    })
})



module.exports = router
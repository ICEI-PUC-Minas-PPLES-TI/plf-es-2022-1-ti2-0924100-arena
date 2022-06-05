const express = require("express")
const app = express();
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser');//SERVE PARA RECEBER O FORMULÁRIO
const time = require('../Models/Time')//PUXA A TABELA TIME
const esporte = require('../Models/Esporte')//PUXA A TABELA ESPORTE


//CONFIG BODY-PARSER -> pegar dados do  formularios 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// estrutura para pegar os dados: -> req.body.(nome do input)-> atribui os nomes para os inputs com o atributo name


//ROTA PARA O CADASTRO DO TIME
router.get('/cadastrar',(req,res)=>{

    res.sendFile(path.join(__dirname, '../', '../','frontend', 'Cadastro_Time', 'time.html'))
})

//ROTA QUE RECEBE OS DADOS DO TIME:
router.post('/timeCadastrado',(req,res)=>{
    time.create({
        Nome: req.body.nome,   
        NumeroMaximo: req.body.nrVagas,
        NumeroAtletas: 1,
        IdEsporte: req.body.esporte

    }).then(()=>{
        res.send('TimeCadastrado')
    }).catch((erro)=>{
        res.send("Erro ao cadastrar o time: " + erro)
    })
})

//ROTA PARA VISUALIZAR TIMES:
router.get('/visualizarTimes',(req,res)=>{
    time.findAll({raw:true}).then((times)=>{
        res.render('escolherTime',{times})
       
    })
    
})

//ROTA PARA AS INFORMAÇÕES DE UM TIME EM ESPECIFICO:
router.get('/:id',(req,res)=>{
    time.findByPk(req.params.id).then((time)=>{
        res.render('infoTime',{time})
    })
})

//ROTA PARA INSCREVER-SE EM UM TIME:
router.get('/time/info',(req,res)=>{
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'entrar_time', 'entrartime.html'))
})



module.exports = router
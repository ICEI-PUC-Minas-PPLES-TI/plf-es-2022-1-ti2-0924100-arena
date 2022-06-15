const express = require("express")
const app = express();
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser');//SERVE PARA RECEBER O FORMULÁRIO
const time = require('../Models/Time')//PUXA A TABELA TIME
const esporte = require('../Models/Esporte')//PUXA A TABELA ESPORTE
const atletaTime = require("../Models/AtletaTime");

const {QueryTypes} = require('sequelize')
const {sequelize,Sequelize} = require('../Models/db')

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

    }).then((time)=>{
        atletaTime.create({
            EmailAtleta: req.body.email,
            CodigoTime: time.CodigoTime
        })
        res.redirect('/atleta/home/' + req.body.email )
    }).catch((erro)=>{
        res.send("Erro ao cadastrar o time: " + erro)
    })
})

//ROTA PARA VISUALIZAR TIMES:
router.get('/visualizarTimes',async(req,res)=>{
    
    let times = await sequelize.query(`select t1.Nome,t1.NumeroMaximo,t1.CodigoTime,t1.NumeroAtletas, t2.nome as nomeEsporte from  times as t1 join esportes as t2
    on t1.IdEsporte = t2.IdEsporte
    WHERE NumeroAtletas < NumeroMaximo ;`,{type: QueryTypes.SELECT})
    res.render('escolherTime',{times: times})
})

//ROTA PARA AS INFORMAÇÕES DE UM TIME EM ESPECIFICO:
router.get('/:id',(req,res)=>{
    time.findByPk(req.params.id,{raw:true}).then((time)=>{
        atletaTime.findAll({
            raw: true,
            where: {
                CodigoTime: req.params.id
            }
        }).then((atletas)=>{
            res.render('infoTime',{time: time, atletas: atletas})
        })
        

    })
})

//ROTA PARA AS INFORMAÇÕES DE UM TIME EM ESPECIFICO que já esta inserido:
router.get('/info/:idTime/:idAtleta',(req,res)=>{
    time.findByPk(req.params.id,{raw:true}).then((time)=>{
        atletaTime.findAll({
            raw: true,
            where: {
                CodigoTime: req.params.idTime
            }
        }).then((atletas)=>{
            res.render('infoTime2',{time: time, atletas: atletas})
        })
        

    })
})



//ROTA PARA ENTRAR NO TIME:
//FALTA CONSEGUIR FAZER UM UPDATE NA TABELA DO TIME PARA SUBIR EM 1 O NUMERO DE ATLETAS;
router.post('/entrarTime/:id',(req,res)=>{
    let idTime = req.params.id
    atletaTime.create({
        EmailAtleta: req.body.email,
        CodigoTime: req.params.id
    }).then(()=>{
        async ()=>{
            var novoNrAtletas = req.body.nrAltetas + 1;
            var time  = await sequelize.query(`UPDATE times SET NumeroAtletas = ${novoNrAtletas} WHERE CodigoTime = ${req.params.id};`,{type: QueryTypes.UPDATE}) 
        }
        res.redirect('/atleta/home/' + req.body.email)
        
    }).catch((erro)=>{
        res.send("Erro ao cadastrar o time: " + erro)
    })
})


module.exports = router
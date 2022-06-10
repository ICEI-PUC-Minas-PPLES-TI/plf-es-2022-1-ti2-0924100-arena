const express = require("express")
const app = express();
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser');//SERVE PARA RECEBER O FORMULÁRIO
const atleta = require('../Models/Atleta')//PUXA A TABELA ATLETA
const passport = require('passport')

const {QueryTypes} = require('sequelize')
const {sequelize,Sequelize} = require('../Models/db')


//CONFIG BODY-PARSER -> pegar dados do  formularios 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// estrutura para pegar os dados: -> req.body.(nome do input)-> atribui os nomes para os inputs com o atributo name




//ROTA PARA A PAGINA HOME DO ATLETA:

router.get('/home/:id',(req,res)=>{
   //PRECISO DAS TABELAS: partida [TIMEPARTIDAS , PAGAMENTOS] [TIMES , ATLETATIMES] , [ AVALIACAOHABILIDADES , AVALIACAOCONDUTA ]
    res.render('homeAtleta', { id: req.params.id})

    async ()=>{
        let avaliacaoConduta = await sequelize.query(`SELECT avg(Nota) FROM avaliacaocondutas WHERE emailatleta =  ${req.params.id};`,{type: QueryTypes.SELECT})
        let avaliacaoHabilidade = await sequelize.query(`SELECT * FROM avaliacaohabilidades WHERE emailatleta =  ${req.params.id};`,{type: QueryTypes.SELECT})
        //NAO TA FEITO ESSA DAQUI: PRECISO RECURAR DADOS DAS PARTIDAS Q OS TIMES DO USUARIO ESTÁ  E SE ELAS JA FORAM PAGAS OU NÃO
        let partidas = await sequelize.query("SELECT * FROM timepartidas AS t1 JOIN pagamentos AS t2 on t1.codigopartida = t2.codigopartida WHERE t1.partidas IN ( SELECT   FROM times AS t1 JOIN atletatimes AS t2) ",{type: QueryTypes.SELECT})
        let times = await sequelize.query(`SELECT * FROM  times AS t1 JOIN atletatimes  AS  t2 on t1.codigotime = t2.codigotime WHERE  t2.emailatleta = ${req.params.id};`,{type: QueryTypes.SELECT})
    }
})


//ROTA PARA A PAGINA DE CADASTRO
router.get('/cadastrar',(req,res)=>{
   
   res.render('cadastroAtleta')
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
        //res.sendFile(path.join(__dirname, '../', '../','frontend', 'Home', 'homeAtleta.html'))
        res.redirect('/atleta/home' + req.body.email)
    }).catch((erro)=>{
        res.send("Deu um erro!" + erro)
    })
})

router.get('/login', function(req,res){
    res.render("loginAtleta")
})

router.post('/login',(req,res,next)=>{
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/atleta/login"
    })(req,res,next)
})


module.exports = router
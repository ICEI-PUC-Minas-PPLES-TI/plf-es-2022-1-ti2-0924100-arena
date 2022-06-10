const express = require("express")
const app = express();
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser');//SERVE PARA RECEBER O FORMULÁRIO
const atleta = require('../Models/Atleta')//PUXA A TABELA ATLETA
const passport = require('passport')

const {QueryTypes} = require('sequelize')
const {sequelize,Sequelize} = require('../Models/db');
const { json } = require("body-parser");


//CONFIG BODY-PARSER -> pegar dados do  formularios 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// estrutura para pegar os dados: -> req.body.(nome do input)-> atribui os nomes para os inputs com o atributo name




//ROTA PARA A PAGINA HOME DO ATLETA:

router.get('/home/:id', async (req,res)=>{
   //PRECISO DAS TABELAS: partida [TIMEPARTIDAS , PAGAMENTOS] [TIMES , ATLETATIMES] , [ AVALIACAOHABILIDADES , AVALIACAOCONDUTA ]
    //res.render('homeAtleta', { id: req.params.id})


        //let avaliacaoConduta = await sequelize.query(`SELECT avg(Nota) FROM avaliacaocondutas WHERE emailatleta =  ${req.params.id};`,{type: QueryTypes.SELECT})
        //let avaliacaoHabilidade = await sequelize.query(`SELECT * FROM avaliacaohabilidades WHERE emailatleta =  ${req.params.id};`,{type: QueryTypes.SELECT})
        //SELECT PARA AS PARTIDAS QUE OS TIMES QUE O ATLETA ESTÁ E SE ESTÃO PAGAS OU NÃO
        let partidas = await sequelize.query(`select t1.CodigoPartida, t1.Data, t1.HorarioInicio, t1.HorarioFim, t3.pago from partidas as t1 join timepartidas as t2 on t1.CodigoPartida = t2.CodigoPartida
        join pagamentos as t3 on t1.CodigoPartida = t3.CodigoPartida
        where t2.CodigoTime  in ( select CodigoTime from atletatimes as t4 join atletas  as t5  on t4.EmailAtleta = t5.EmailAtleta
        where t5.EmailAtleta = '${req.params.id}') or t2.CodigoTime2  in ( select CodigoTime from atletatimes as t4 join atletas  as t5  on t4.EmailAtleta = t5.EmailAtleta
        where t5.EmailAtleta = '${req.params.id}')  ; `,{type: QueryTypes.SELECT})
        let times = await sequelize.query(`select t1.nome , t2.nome as nomeEsporte, t1.NumeroAtletas from times as t1 join esportes as t2  
        on t1.IdEsporte = t2.IdEsporte 
        join atletatimes as t3 
        on t1.CodigoTime = t3.CodigoTime
        where t3.EmailAtleta = '${req.params.id}';`,{type: QueryTypes.SELECT})
        let arreyPago = []
            
            for(let i=0; i<2; i++){
                if(partidas[i].pago == 0){
                    arreyPago.push("Pago")
                }else{
                    arreyPago.push("Não-pago")
                }
            }

            res.render('homeAtleta', { id: req.params.id, partidas: partidas, times: times})
       
        
    
    
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
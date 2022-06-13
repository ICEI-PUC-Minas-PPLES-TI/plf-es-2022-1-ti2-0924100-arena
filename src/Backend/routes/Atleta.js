const express = require("express")
const app = express();
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser');//SERVE PARA RECEBER O FORMULÁRIO
const atleta = require('../Models/Atleta')//PUXA A TABELA ATLETA
const passport = require('passport')
const avaliacaoconduta = require('../Models/AvaliacaoConduta')
const avaliacaohabilidade = require('../Models/AvaliacaoHabilidade')

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
    

        // SELECT A MÉDIA DAS AVALIAÇÕES DO ATLETA LOGADO
        let avaliacaoConduta = await sequelize.query(`SELECT avg(Nota) as media FROM avaliacaocondutas WHERE emailatleta =  '${req.params.id}';`,{type: QueryTypes.SELECT})
        

        //let avaliacaoHabilidade = await sequelize.query(`SELECT * FROM avaliacaohabilidades WHERE emailatleta =  ${req.params.id};`,{type: QueryTypes.SELECT})
        //SELECT PARA AS PARTIDAS QUE OS TIMES QUE O ATLETA ESTÁ E SE ESTÃO PAGAS OU NÃO
        let partidas = await sequelize.query(`select t1.CodigoPartida, t1.Data, t1.HorarioInicio, t1.HorarioFim, t3.pago from partidas as t1 join timepartidas as t2 on t1.CodigoPartida = t2.CodigoPartida
        join pagamentos as t3 on t1.CodigoPartida = t3.CodigoPartida
        where t2.CodigoTime  in ( select CodigoTime from atletatimes as t4 join atletas  as t5  on t4.EmailAtleta = t5.EmailAtleta
        where t5.EmailAtleta = '${req.params.id}') or t2.CodigoTime2  in ( select CodigoTime from atletatimes as t4 join atletas  as t5  on t4.EmailAtleta = t5.EmailAtleta
        where t5.EmailAtleta = '${req.params.id}')  ; `,{type: QueryTypes.SELECT})
        
        //SELECT PARA OS TIMES QUE O ATLETA LOGADO ESTÁ:
        let times = await sequelize.query(`select t1.nome , t2.nome as nomeEsporte, t1.NumeroAtletas from times as t1 join esportes as t2  
        on t1.IdEsporte = t2.IdEsporte 
        join atletatimes as t3 
        on t1.CodigoTime = t3.CodigoTime
        where t3.EmailAtleta = '${req.params.id}';`,{type: QueryTypes.SELECT})
        let arreyPago = []
            
           /* for(let i=0; i<2; i++){
                if(partidas[i].pago == 0){
                    arreyPago.push("Pago")
                }else{
                    arreyPago.push("Não-pago")
                }
            }*/

            res.render('homeAtleta', { id: req.params.id, partidas: partidas, times: times, avaliacaoConduta: avaliacaoConduta})
       
        
    
    
})

router.get('/avaliar/:id/:codpartida',(req,res)=>{
    async function getPartidas(){
        let time1 = await sequelize.query(`select TIMES.CodigoTime from partidas inner join times on PARTIDAS.CodigoTime = TIMES.CodigoTime WHERE CodigoPartida=${req.params.codpartida};`, {type: QueryTypes.SELECT})
        let time2 = await sequelize.query(`SELECT CodigoTime2 FROM TIMEPARTIDAS WHERE CodigoPartida=${req.params.codpartida};`, {type: QueryTypes.SELECT})
        let nome1 = await sequelize.query(`SELECT Nome FROM TIMES WHERE CodigoTime=${time1[0].CodigoTime};`,{type: QueryTypes.SELECT})
        let nome2 = await sequelize.query(`SELECT Nome FROM TIMES WHERE CodigoTime=${time2[0].CodigoTime2};`,{type: QueryTypes.SELECT})
        var esporte = await sequelize.query(`SELECT IdEsporte FROM PARTIDAS WHERE CodigoPartida=${req.params.codpartida};`,{type: QueryTypes.SELECT})
        let atletas1 = await sequelize.query(`SELECT ATLETAS.EmailAtleta ,ATLETAS.Nome FROM ATLETAS INNER JOIN ATLETATIMES ON ATLETAS.EmailAtleta = ATLETATIMES.EmailAtleta INNER JOIN TIMES ON ATLETATIMES.CodigoTime = TIMES.CodigoTime WHERE TIMES.CodigoTime=${time1[0].CodigoTime};`,{type: QueryTypes.SELECT})
        let atletas2 = await sequelize.query(`SELECT ATLETAS.EmailAtleta ,ATLETAS.Nome FROM ATLETAS INNER JOIN ATLETATIMES ON ATLETAS.EmailAtleta = ATLETATIMES.EmailAtleta INNER JOIN TIMES ON ATLETATIMES.CodigoTime = TIMES.CodigoTime WHERE TIMES.CodigoTime=${time2[0].CodigoTime2};`,{type: QueryTypes.SELECT})
        res.render('avaliar', {esporte: esporte[0],codigopartida: req.params.codpartida,time1: time1[0],time2: time2[0],nome1: nome1[0], nome2: nome2[0], atletas1: atletas1, atletas2: atletas2,id: req.params.id})
    }
    getPartidas()   
})

router.post('/avaliacao/:id/:codigopartida/:avaliado/:esporte',(req,res)=>{
    async function getEsporte(){
        avaliacaoconduta.create({
            EmailAtleta: req.params.avaliado,
            AtletaAvaliador: req.params.id,
            CodigoPartida: req.params.codigopartida,
            Nota: req.body.conduta
        }).then(function(){

        }).catch(function(err){
            console.log(err)
        })
        
        avaliacaohabilidade.create({
            EmailAtleta: req.params.avaliado,
            CodigoEsporte: req.params.esporte,
            AtletaAvaliador: req.params.id,
            Nota: req.body.habilidade
        }).then(function(){

        }).catch(function(err){
            console.log(err)
        })
        /*let time1 = await sequelize.query(`select TIMES.CodigoTime from partidas inner join times on PARTIDAS.CodigoTime = TIMES.CodigoTime WHERE CodigoPartida=${req.params.codpartida};`, {type: QueryTypes.SELECT})
        let time2 = await sequelize.query(`SELECT CodigoTime2 FROM TIMEPARTIDAS WHERE CodigoPartida=${req.params.codpartida};`, {type: QueryTypes.SELECT})
        let nome1 = await sequelize.query(`SELECT Nome FROM TIMES WHERE CodigoTime=${time1[0].CodigoTime};`)
        let nome2 = await sequelize.query(`SELECT Nome FROM TIMES WHERE CodigoTime=${time2[0].CodigoTime2};`)
        let atletas1 = await sequelize.query(`SELECT ATLETAS.EmailAtleta ,ATLETAS.Nome FROM ATLETAS INNER JOIN ATLETATIMES ON ATLETAS.EmailAtleta = ATLETATIMES.EmailAtleta INNER JOIN TIMES ON ATLETATIMES.CodigoTime = TIMES.CodigoTime WHERE TIMES.CodigoTime=${time1[0].CodigoTime};`,{type: QueryTypes.SELECT})
        let atletas2 = await sequelize.query(`SELECT ATLETAS.EmailAtleta ,ATLETAS.Nome FROM ATLETAS INNER JOIN ATLETATIMES ON ATLETAS.EmailAtleta = ATLETATIMES.EmailAtleta INNER JOIN TIMES ON ATLETATIMES.CodigoTime = TIMES.CodigoTime WHERE TIMES.CodigoTime=${time2[0].CodigoTime2};`,{type: QueryTypes.SELECT})
        res.render('avaliar', {codigopartida: req.params.codigopartida,time1: time1[0],time2: time2[0],nome1: nome1[0], nome2: nome2[0], atletas1: atletas1, atletas2: atletas2,id: req.params.id})
        */
    }
    getEsporte()
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
        res.redirect('/atleta/home/' + req.body.email)
    }).catch((erro)=>{
        res.send("Deu um erro!" + erro)
    })
})

router.get('/escolherPartidas/:idAtleta', async (req,res)=>{
    //TABS: PARTIDAS, ESPORTES, QUADRA, TIME, timepartidas
    let totalParticipantes = await sequelize.query(`select sum(NumeroAtletas) as totalParticipantes 
    from times as t1 join timepartidas as t2
    on  t1.CodigoTime = t2.CodigoTime or t1.CodigoTime = t2.CodigoTime2
    group by t2.CodigoPartida
    HAVING t2.CodigoPartida in(
        select t1.CodigoPartida
        from timepartidas as t1 join atletatimes as t2
        on t1.CodigoTime = t2.CodigoTime or t1.CodigoTime2 = t2.CodigoTime
        join atletas as t3
        on t2.EmailAtleta = t3.EmailAtleta
        WHERE t3.EmailAtleta = '${req.params.idAtleta}'
    );`,{type: QueryTypes.SELECT})
})





module.exports = router
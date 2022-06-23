const express = require("express")
const app = express();
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser');//SERVE PARA RECEBER O FORMULÁRIO
const atleta = require('../Models/Atleta')//PUXA A TABELA ATLETA
const passport = require('passport')
const avaliacaoconduta = require('../Models/AvaliacaoConduta')
const avaliacaohabilidade = require('../Models/AvaliacaoHabilidade')
const pagamento = require('../Models/Pagamento')
const recusa = require('../Models/Reclamacao')

const { QueryTypes, DOUBLE, where } = require('sequelize')
const { sequelize, Sequelize } = require('../Models/db');
const { json } = require("body-parser");
const { stringify } = require("querystring");
const { V4MAPPED } = require("dns");


//CONFIG BODY-PARSER -> pegar dados do  formularios 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// estrutura para pegar os dados: -> req.body.(nome do input)-> atribui os nomes para os inputs com o atributo name




//ROTA PARA A PAGINA HOME DO ATLETA:

router.get('/home/:id', async (req, res) => {
    //PRECISO DAS TABELAS: partida [TIMEPARTIDAS , PAGAMENTOS] [TIMES , ATLETATIMES] , [ AVALIACAOHABILIDADES , AVALIACAOCONDUTA ]

        // SELECT A MÉDIA DAS AVALIAÇÕES DO ATLETA LOGADO
        let avaliacaoConduta = await sequelize.query(`SELECT avg(Nota) as media FROM avaliacaocondutas WHERE EmailAtleta =  '${req.params.id}';`,{type: QueryTypes.SELECT})
        

    // SELECT A MÉDIA DAS AVALIAÇÕES DO ATLETA LOGADO


    //SELECT para a media de avaliações das habilidades por esporte
    let avaliacaoHabilidade = await sequelize.query(`select t1.nome, avg(t2.nota) as nota 
    from esportes as t1 join avaliacaohabilidades as t2
    on t1.IdEsporte = t2.CodigoEsporte
    where t2.EmailAtleta = '${req.params.id}'
    GROUP by t1.Nome;`, { type: QueryTypes.SELECT })

    //SELECT PARA AS PARTIDAS QUE OS TIMES QUE O ATLETA ESTÁ E SE ESTÃO PAGAS OU NÃO
    let partidas = await sequelize.query(`select t1.CodigoPartida, t1.Data, t1.HorarioInicio, t1.HorarioFim, t3.pago 
        from partidas as t1 join timepartidas as t2 on t1.CodigoPartida = t2.CodigoPartida
        join pagamentos as t3 on t1.CodigoPartida = t3.CodigoPartida
        WHERE t3.EmailAtleta = '${req.params.id}'; `, { type: QueryTypes.SELECT })

    //SELECT PARA OS TIMES QUE O ATLETA LOGADO ESTÁ:
    let times = await sequelize.query(`select t1.CodigoTime, t1.nome , t2.nome as nomeEsporte, t1.NumeroAtletas from times as t1 join esportes as t2  
        on t1.IdEsporte = t2.IdEsporte 
        join atletatimes as t3 
        on t1.CodigoTime = t3.CodigoTime
        where t3.EmailAtleta = '${req.params.id}';`, { type: QueryTypes.SELECT })
    //SELECT DAS RECUSAS DE PAGAMENTOS DO ATLETA:
    let recusas = await sequelize.query(`SELECT * from reclamacoes WHERE EmailAtleta = '${req.params.id}'`, { type: QueryTypes.SELECT })


    res.render('homeAtleta', {
        id: req.params.id, partidas: partidas, times: times,
        avaliacaoConduta: avaliacaoConduta, avaliacaoHabilidade: avaliacaoHabilidade,
        recusas: recusas
    })




})

router.get('/avaliar/:id/:codpartida', (req, res) => {
    async function getPartidas() {
        let time1 = await sequelize.query(`select TIMES.CodigoTime from partidas inner join times on PARTIDAS.CodigoTime = TIMES.CodigoTime WHERE CodigoPartida=${req.params.codpartida};`, { type: QueryTypes.SELECT })
        let time2 = await sequelize.query(`SELECT CodigoTime2 FROM TIMEPARTIDAS WHERE CodigoPartida=${req.params.codpartida};`, { type: QueryTypes.SELECT })
        let nome1 = await sequelize.query(`SELECT Nome FROM TIMES WHERE CodigoTime=${time1[0].CodigoTime};`, { type: QueryTypes.SELECT })
        let nome2 = await sequelize.query(`SELECT Nome FROM TIMES WHERE CodigoTime=${time2[0].CodigoTime2};`, { type: QueryTypes.SELECT })
        var esporte = await sequelize.query(`SELECT IdEsporte FROM PARTIDAS WHERE CodigoPartida=${req.params.codpartida};`, { type: QueryTypes.SELECT })
        let atletas1 = await sequelize.query(`SELECT ATLETAS.EmailAtleta ,ATLETAS.Nome FROM ATLETAS INNER JOIN ATLETATIMES ON ATLETAS.EmailAtleta = ATLETATIMES.EmailAtleta INNER JOIN TIMES ON ATLETATIMES.CodigoTime = TIMES.CodigoTime WHERE TIMES.CodigoTime=${time1[0].CodigoTime};`, { type: QueryTypes.SELECT })
        let atletas2 = await sequelize.query(`SELECT ATLETAS.EmailAtleta ,ATLETAS.Nome FROM ATLETAS INNER JOIN ATLETATIMES ON ATLETAS.EmailAtleta = ATLETATIMES.EmailAtleta INNER JOIN TIMES ON ATLETATIMES.CodigoTime = TIMES.CodigoTime WHERE TIMES.CodigoTime=${time2[0].CodigoTime2};`, { type: QueryTypes.SELECT })
        res.render('avaliar', { esporte: esporte[0], codigopartida: req.params.codpartida, time1: time1[0], time2: time2[0], nome1: nome1[0], nome2: nome2[0], atletas1: atletas1, atletas2: atletas2, id: req.params.id })
    }
    getPartidas()
})

router.post('/avaliacao/:id/:codigopartida/:avaliado/:esporte', (req, res) => {
    async function getEsporte() {
        avaliacaoconduta.create({
            EmailAtleta: req.params.avaliado,
            AtletaAvaliador: req.params.id,
            CodigoPartida: req.params.codigopartida,
            Nota: req.body.conduta
        }).then(function () {

        }).catch(function (err) {
            console.log(err)
        })

        avaliacaohabilidade.create({
            EmailAtleta: req.params.avaliado,
            CodigoEsporte: req.params.esporte,
            AtletaAvaliador: req.params.id,
            Nota: req.body.habilidade
        }).then(function () {

        }).catch(function (err) {
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
router.get('/cadastrar', (req, res) => {

    res.render('cadastroAtleta')
})

//ROTA PARA RECEBER OS DADOS DE CADASTRO DO ATLETA:
router.post('/cadastroRecebido', (req, res) => {

    //CRIANDO USUÁRIO ATLETA:
    atleta.create({
        EmailAtleta: req.body.email,
        Nome: req.body.nome,
        Senha: req.body.senha,
        DataNascimento: req.body.data,
        Sexo: req.body.sexo
    }).then(function () {

        res.redirect('/atleta/home/' + req.body.email)
    }).catch((erro) => {
        res.send("Deu um erro!" + erro)
    })
})


//ROTA PARA OS DETALHES DA PARTIDA E AS INFORMAÇÕES PARA REALIZAR O PAGAMENTO
router.get('/pagamentos/:idAtleta/:idPartida', async (req, res) => {

    // DEVOLVE UM ARRAY COM O NUMERO TOTAL DE PARTICIPANTES POR PARTIDA
    let totalParticipantes = await sequelize.query(`select sum(t1.NumeroAtletas) as totalParticipantes
    from times as t1 join timepartidas as t2 
    on t1.CodigoTime = t2.CodigoTime or t1.CodigoTime = t2.CodigoTime2 
    WHERE t2.CodigoPartida = ${req.params.idPartida};`, { type: QueryTypes.SELECT })

    //query é para pegar as informações da partida dos locatarios das quadras 
    //q os times do ATLETA irão jogar e se já estão pagos ou não
    let dados = await sequelize.query(`select t1.CodigoPartida, t1.Data, t3.nome,t2.CEP, t2.nomeQuadra,
    t2.Numero, t3.EmailLocatario, t3.TipoChavePix, t3.chavepix, t2.preco
    from partidas as t1 join quadras as t2 on t1.CodigoQuadra = t2.CodigoQuadra
    join locatarios as t3 on t2.EmailLocatario = t3.EmailLocatario 
    WHERE t1.CodigoPartida = ${req.params.idPartida};`, { type: QueryTypes.SELECT })

    //select para os nomes dos times q vao participar da partida:
    let time = await sequelize.query(`select t1.Nome  from times as t1 join timepartidas as t2
    on t1.CodigoTime = t2.CodigoTime WHERE t2.CodigoPartida = ${req.params.idPartida};`, { type: QueryTypes.SELECT })
    time = JSON.parse(JSON.stringify(time))//transforma em um objeto JSON
    time = time[0].Nome//pega o nome

    //select para os nomes dos times q vao participar da partida:
    let adversario = await sequelize.query(`select t1.Nome as adversario from times as t1 join timepartidas as t2
    on t1.CodigoTime = t2.CodigoTime2 WHERE t2.CodigoPartida = ${req.params.idPartida};`, { type: QueryTypes.SELECT })
    adversario = JSON.parse(JSON.stringify(adversario))//transforma em um objeto JSON
    adversario = adversario[0].adversario

    // CALCULA O VALOR INDIVIDUAL DE CADA PARTIDA 
    var textoDados = JSON.parse(JSON.stringify(dados))//transforma em um objeto JSON
    var qtnAtletas = JSON.parse(JSON.stringify(totalParticipantes))//transforma em um objeto JSON

    var totalAtletas = parseFloat(qtnAtletas[0].totalParticipantes)//Pega a quantidade de jogadores na partida
    var precoQuadra = parseFloat(textoDados[0].preco)//Pega o preço da quadra

    let valorIndividual = parseFloat(precoQuadra / totalAtletas); // Calcula o valor individal
    valorIndividual = valorIndividual.toFixed(2)

    //manda renderizar tudo
    res.render('Pagamentos', {
        dados: dados, email: req.params.idAtleta,
        valorIndividual: valorIndividual, idPartida: req.params.idPartida,
        time: time, adversario: adversario,
    })
})

//ROTA PARA RECEBER O COMPRAVANTE ENVIADO POR UM ATLETA:
router.post('/recebeComprovante/:idAtleta/:idPartida', async (req, res) => {
    //Area de teste:
    
    //fim da area de teste
    //Pegando a data atual
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtual = ano + mes + dia;

    //UPDATE tabela pagamentos
    await sequelize.query(`UPDATE pagamentos 
    set pago = 'Em avaliação', datapagamento = ${dataAtual} , comprovante = '${req.body.b64}'
    WHERE EmailAtleta = '${req.params.idAtleta}' and CodigoPartida = ${req.params.idPartida} ;`, { type: QueryTypes.UPDATE })

    await sequelize.query(`DELETE from reclamacoes 
    where EmailAtleta =  '${req.params.idAtleta}' and CodigoPartida = ${req.params.idPartida} ;`, { type: QueryTypes.DELETE })

    res.redirect('/atleta/home/' + req.params.idAtleta)

})

module.exports = router


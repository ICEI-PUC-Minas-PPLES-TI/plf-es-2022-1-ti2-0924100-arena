// Carregando módulos
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const { engine } = require('express-handlebars');
const path = require('path')
const locatario = require("./Backend/routes/Locatario")
const atleta = require('./Backend/routes/Atleta')
const partida = require('./Backend/routes/Partida')
const time = require('./Backend/routes/Time')
const indicadores = require('./Backend/routes/Indicadores')
const atletaBd = require('./Backend/Models/Atleta')
const locatarioBd = require('./Backend/Models/Locatario')

const { QueryTypes } = require('sequelize')
const { sequelize, Sequelize } = require('./Backend/Models/db')
const quadra = require('./Backend/Models/Quadra')//PUXA O MODELS QUADRA


// Configurações

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");
// Public
app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "frontend")))

// Rotas
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/frontend/Tela_inicial/index.html")
})

app.get('/login', (req, res) => {
    res.render('login')
})




app.get('/indicadores', (req, res) => {
    //----- Indicador 1: Inicio
    var stringData = '2022-06-03'
    async function executa() {
        let todosdata = await sequelize.query(
            `SELECT * FROM partidas;`, { type: QueryTypes.SELECT, raw: true })
        todosdata = JSON.stringify(todosdata);
        todosdata = JSON.parse(todosdata)

        var tam = Object.keys(todosdata).length

        for (let i = 0; i < tam; i++) {
            let dataNova = JSON.stringify(todosdata[i].createdAt).split('T')[0] + `"`
            todosdata[i].createdAt = dataNova
        }

        let registrosDia = 0;
        var arreyCadastros = []
        var arreyCadastrosdia = []
        let aux = ['"2022-06-02"', '"2022-06-03"', '"2022-06-04"', '"2022-06-06"']
        for (let j = 0; j < aux.length; j++) {
            let date2 = aux[j];
            registrosDia = 0
            for (let i = 0; i < tam; i++) {
                let date1 = todosdata[i].createdAt;
                if (date1 < date2) {
                }
                else if (date1 > date2) {

                }
                else {

                    registrosDia = registrosDia + 1
                }

            }
            arreyCadastros.push(`${aux[j]}`)
            arreyCadastrosdia.push(`${registrosDia}`)
        }

        let todosdatapartida = await sequelize.query(
            `SELECT DISTINCT Data FROM partidas;`, { type: QueryTypes.SELECT, raw: true })

        todosdatapartida = JSON.stringify(todosdatapartida);
        todosdatapartida = JSON.parse(todosdatapartida)
        let auxpartida = []

        for (let i = 0; i < tam; i++) {
            let dataNova = JSON.stringify(todosdatapartida[i])
            todosdatapartida[i] = dataNova
        }

        let registrosDiapartida = 0;
        var arreyCadastrospartida = []
        var arreyCadastrospartidadia = []

        for (let j = 0; j < auxpartida.length; j++) {
            let date2 = auxpartida[j];
            registrosDiapartida = 0
            for (let i = 0; i < tam; i++) {
                let date1 = todosdatapartida[i];
                if (date1 < date2) {
                }
                else if (date1 > date2) {

                }
                else {
                    registrosDiapartida = registrosDiapartida + 1
                }

            }
            arreyCadastrospartida.push(`${auxpartida[j]}`)
            arreyCadastrospartidadia.push(`${registrosDiapartida}`)
            //Indicador 1: Fim
            //Indicador 2: Inicio


            //Indicador 2: FIM
            //Indicador 3: Inicio

            //TOTAL DE PARTIDAS
            var totalPartidas = await sequelize.query(
                `select count(*) from partidas;`, { type: QueryTypes.SELECT, raw: true })
                totalPartidas = JSON.stringify(totalPartidas);
                totalPartidas = JSON.parse(totalPartidas)

            //TOTAL DE PARTIDAS DE FUTEBOL;
            var totalPartidasFut = await sequelize.query(
                `select count(*) from partidas where IdEsporte = 1;`, { type: QueryTypes.SELECT, raw: true })    

            //TOTAL DE PARTIDAS DE BASQUETE;
            var totalPartidasBas = await sequelize.query(
                `select count(*) from partidas where IdEsporte = 2;`, { type: QueryTypes.SELECT, raw: true })

            //TOTAL DE PARTIDAS DE FUTVOLEI;
            var totalPartidasFutVol = await sequelize.query(
                `select count(*) from partidas where IdEsporte = 3;`, { type: QueryTypes.SELECT, raw: true })
            
                //TOTAL DE PARTIDAS DE VOLEI;
            var totalPartidasVol = await sequelize.query(
                `select count(*) from partidas where IdEsporte = 4;`, { type: QueryTypes.SELECT, raw: true })
            
            //TOTAL DE PARTIDAS DE Tenis;
            var totalPartidasTen = await sequelize.query(
                `select count(*) from partidas where IdEsporte = 5;`, { type: QueryTypes.SELECT, raw: true })
        }


        res.render('Indicadores', { qtdAtual: tam, stringQuadras: JSON.stringify(arreyCadastros), 
            stringQuadrasdia: JSON.stringify(arreyCadastrosdia), 
            stringpartidas: JSON.stringify(arreyCadastrospartida), 
            stringpartidasdia: JSON.stringify(arreyCadastrospartidadia),
            totalPartidas: totalPartidas, 
            futPartidas: totalPartidasFut, 
            basPartidas: totalPartidasBas, 
            futVolPartidas: 
            totalPartidasFutVol, 
            VolPartidas: totalPartidasVol, 
            TenPartidas: totalPartidasTen })
    }
    executa()
})




app.post('/validarLogin', (req, res) => {
    if (req.body.usuario == "atleta") {
        atletaBd.findByPk(req.body.email, { raw: true })
            .then((usuario) => {
                if (usuario.Senha == req.body.password) {
                    res.redirect('/atleta/home/' + req.body.email)
                } else {

                    res.redirect('/login')

                }
            }).catch((erro) => {
                res.send("USUARIO NAO ENCONTADO" + erro)
            })
    } else if (req.body.usuario == "locatario") {
        locatarioBd.findByPk(req.body.email, { raw: true })
            .then((usuario) => {
                if (usuario.Senha == req.body.password) {
                    res.redirect('/locatario/home/' + req.body.email)
                } else {

                    res.redirect('/login')

                }
            }).catch((erro) => {
                res.send("USUARIO NAO ENCONTADO" + erro)
            })
    }

})

app.use('/locatario', locatario)

app.use('/atleta', atleta)

app.use('/partida', partida)

app.use('/time', time)




// Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor rodando em http://localhost:8081")
})
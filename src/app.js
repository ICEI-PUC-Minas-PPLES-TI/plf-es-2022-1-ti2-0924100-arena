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
const passport = require("passport")
const atletaBd = require('./Backend/Models/Atleta')
const locatarioBd = require('./Backend/Models/Locatario')

const {QueryTypes} = require('sequelize')
const { sequelize, Sequelize } = require('./Backend/Models/db')  
const quadra = require('./Backend/Models/Quadra')//PUXA O MODELS QUADRA
require('./config/auth')(passport)

// Configurações
/*app.use(session({
    secret: "arena",
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
*/
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




app.get('/indicadores', (req, res) =>{

    async function executa(){
    let qntAtual = await sequelize.query(
        "SELECT COUNT(CodigoQuadra) FROM quadras ;",{type: QueryTypes.SELECT})
        var myString = JSON.stringify(qntAtual);
        var splits = myString.split(':');
        splits = splits[1].split('}');
        console.log(splits[0])
          res.render('Indicadores', {qtdAtual: splits[0]}) 
      }
            executa() 
})




app.post('/validarLogin', (req, res) => {
    if(req.body.usuario == "atleta"){
        atletaBd.findByPk(req.body.email,{raw:true})
        .then((usuario)=>{
            if (usuario.Senha == req.body.password) {
                res.redirect('/atleta/home/' + req.body.email)
            }else{
                
                res.redirect('/login')
                
            }
        }).catch((erro)=>{
            res.send("USUARIO NAO ENCONTADO" + erro)
        })
    }else if(req.body.usuario == "locatario"){
        locatarioBd.findByPk(req.body.email,{raw:true})
        .then((usuario)=>{
            if (usuario.Senha == req.body.password) {
                res.redirect('/locatario/home/' + req.body.email)
            }else{
                
                res.redirect('/login')
                
            }
        }).catch((erro)=>{
            res.send("USUARIO NAO ENCONTADO" + erro)
        })
    }
    /*
    atletaBd.findByPk(req.body.email,{raw:true})
        .then((usuarioA) => {
            if (usuarioA.Senha == req.body.password) {
                res.redirect('/atleta/home/' + req.body.email)
            } else {
                locatarioBd.findByPk(req.body.email,{raw:true})
                    .then((usuarioL) => {
                        if (usuarioL.Senha == req.body.password) {
                            res.redirect('locatario/home/' + req.body.email)
                        }else{
                            res.redirect('/login')
                        }
                    }).catch((err) => {
                        res.send("USUARIO NAO ENCONTADO" + err)
                    })
            }
        }).catch((erro) => {
            res.send("USUARIO NAO ENCONTADO" + erro)
        })*/
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
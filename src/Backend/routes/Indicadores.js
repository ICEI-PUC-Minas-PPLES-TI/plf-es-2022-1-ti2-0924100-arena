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


router.get('/indicadores', (req, res) => {
    res.render('Indicadores')
})

module.exports = router;
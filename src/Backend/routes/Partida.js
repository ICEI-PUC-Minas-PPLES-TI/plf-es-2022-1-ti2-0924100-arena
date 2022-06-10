const express = require("express")
const router = express.Router()
const path = require('path')
const partida = require('../Models/Partida')
const atletatime = require('../Models/AtletaTime')
const quadra = require('../Models/Quadra')
const esportequadra = require('../Models/EsporteQuadra')
const times = require('../Models/Time')
const {QueryTypes} = require('sequelize')
const { sequelize, Sequelize } = require("../Models/Db")

router.get('/entrar/time',function(req,res){
    async function getTimes(){
        let times = await sequelize.query(`SELECT * FROM TIMES INNER JOIN ATLETATIMES ON TIMES.CodigoTime = ATLETATIMES.CodigoTime WHERE ATLETATIMES.EmailAtleta = 'gabriel.limasouza@hotmail.com';`, {type: QueryTypes.SELECT})
        res.render('partida/entrar/meusTimes', {times: times})
    }
    getTimes();
})

router.get('/entrar/partidas/:codigotime/:esporte',function(req,res){
    async function getPartidas(){
        var partidas = await sequelize.query(`SELECT * FROM PARTIDAS INNER JOIN QUADRAS ON PARTIDAS.CodigoQuadra = QUADRAS.CodigoQuadra WHERE IdEsporte=${req.params.esporte};`, {type: QueryTypes.SELECT})
        /*
        atletatime.create({
            CodigoTime: partidas[0].CodigoTime,
            CodigoTime2: req.params.codigotime,
            CodigoPartida: partidas[0].CodigoPartida,
        })*/
        res.render('partida/entrar/partidas', {partidas: partidas,codtime: partidas[0].CodigoTime,codtime2: req.params.codigotime,esporte: req.params.esporte})
    }
    getPartidas();
})

router.get('/entrar/lobby/:codigotime/:esporte/:codigopartida',function(req,res){
    async function getPartidas(){
        let partidas = await sequelize.query(`SELECT * FROM PARTIDAS WHERE CodigoPartida=${req.params.codigopartida};`, {type: QueryTypes.SELECT})
        res.render('/partida/entrar/lobby', {partidas: partidas})
    }
    getPartidas();
})

router.get('/criar/form',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'criarPartida','criarPartida.html'))
})

router.get('/criar/time/:codesporte/:horarioi/:horariof/:data/:minimop',function(req,res){
    async function getTimes(){
        let times = await sequelize.query(`SELECT TIMES.CodigoTime,TIMES.Nome FROM TIMES WHERE IdEsporte=${req.params.codesporte};`, {type: QueryTypes.SELECT})
        res.render('partida/criar/meusTimes', {times: times, codesporte: req.params.codesporte, horarioi: req.params.horarioi, horariof: req.params.horariof, data: req.params.data, minimop: req.params.minimop})
    }
    getTimes();
})

router.get('/criar/escolher/:codesporte/:horarioi/:horariof/:data/:minimop/:codigotime',function(req,res){
    async function getQuadras(){
        let quadras = await sequelize.query(`SELECT QUADRAS.CodigoQuadra,QUADRAS.NomeQuadra,QUADRAS.CEP,QUADRAS.Numero,QUADRAS.Preco FROM QUADRAS INNER JOIN ESPORTEQUADRAS ON QUADRAS.CodigoQuadra = ESPORTEQUADRAS.CodigoQuadra WHERE IdEsporte=${req.params.codesporte};`, {type: QueryTypes.SELECT})
        res.render('partida/criar/escolherQuadra', {quadras: quadras, codesporte: req.params.codesporte, horarioi: req.params.horarioi, horariof: req.params.horariof, data: req.params.data, minimop: req.params.minimop,codigotime: req.params.codigotime})
    }
    getQuadras();
})

router.get('/lobby/:codesporte/:horarioi/:horariof/:data/:minimop/:codquadra/:preco/:codigotime',function(req,res){
    partida.create({
        CodigoQuadra: req.params.codquadra,
        IdEsporte: req.params.codesporte,
        CodigoTime: req.params.codigotime,
        HorarioInicio: req.params.horarioi,
        HorarioFim: req.params.horariof,
        Data: req.params.data,
        MinimoParticipantes: req.params.minimop,
        Preco: req.params.preco,
    }).then(()=>{
        async function getTimes(){
            let time = await sequelize.query(`SELECT * FROM TIMES WHERE CodigoTime=${req.params.codigotime};`, {type: QueryTypes.SELECT})
            let quadra = await sequelize.query(`SELECT * FROM QUADRAS WHERE CodigoQuadra=${req.params.codquadra};`,{type: QueryTypes.SELECT})
            let esporte = await sequelize.query(`SELECT * FROM ESPORTES WHERE IdEsporte=${req.params.codesporte};`,{type: QueryTypes.SELECT})
            res.render('partida/criar/lobby', {esporte: esporte[0],quadra: quadra[0],time: time[0],horarioi: req.params.horarioi, horariof: req.params.horariof, data: req.params.data,minimop: req.params.minimop})
        }
        getTimes();
    }).catch((erro)=>{
        res.send("Nao foi possivel realizar o cadastro: " + erro)
    })
})

module.exports = router
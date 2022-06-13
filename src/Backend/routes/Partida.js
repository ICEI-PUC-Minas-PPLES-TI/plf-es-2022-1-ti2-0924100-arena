const express = require("express")
const router = express.Router()
const path = require('path')
const partida = require('../Models/Partida')
const timepartidas = require('../Models/TimePartida')
const quadra = require('../Models/Quadra')
const esportequadra = require('../Models/EsporteQuadra')
const times = require('../Models/Time')
const {QueryTypes} = require('sequelize')
const { sequelize, Sequelize } = require("../Models/Db")

router.get('/entrar/esporte/:id',function(req,res){
    res.render('partida/entrar/esporte', {id: req.params.id})
})

router.get('/entrar/time/:esporte/:id',function(req,res){
    async function getTimes(){
        let times = await sequelize.query(`SELECT * FROM TIMES INNER JOIN ATLETATIMES ON TIMES.CodigoTime = ATLETATIMES.CodigoTime WHERE ATLETATIMES.EmailAtleta = '${req.params.id}';`, {type: QueryTypes.SELECT})
        res.render('partida/entrar/meusTimes', {times: times, esporte:req.params.esporte, id:req.params.id})
    }
    getTimes();
})

router.get('/entrar/partidas/:codigotime/:esporte/:id',function(req,res){
    async function getPartidas(){
        var partidas = await sequelize.query(`SELECT * FROM PARTIDAS INNER JOIN ESPORTEQUADRAS ON PARTIDAS.IdEsporte = ESPORTEQUADRAS.IdEsporte INNER JOIN QUADRAS ON QUADRAS.CodigoQuadra = ESPORTEQUADRAS.CodigoQuadra WHERE PARTIDAS.IdEsporte=${req.params.esporte}`, {type: QueryTypes.SELECT})
        res.render('partida/entrar/partidas', {partidas: partidas,codigotime: req.params.codigotime,esporte: req.params.esporte,id:req.params.id})
    }
    getPartidas();
})

router.get('/entrar/lobby/:codigotime/:esporte/:codigopartida/:id',function(req,res){
    async function getPartidas(){
        let partidas = await sequelize.query(`SELECT * FROM PARTIDAS INNER JOIN QUADRAS ON PARTIDAS.CodigoQuadra = QUADRAS.CodigoQuadra INNER JOIN ESPORTES ON PARTIDAS.IdEsporte = ESPORTES.IdEsporte WHERE CodigoPartida=${req.params.codigopartida};`, {type: QueryTypes.SELECT})
        let time1 = await sequelize.query(`select TIMES.CodigoTime from partidas inner join times on PARTIDAS.CodigoTime = TIMES.CodigoTime WHERE CodigoPartida=${req.params.codigopartida};`, {type: QueryTypes.SELECT})
        let nome1 = await sequelize.query(`SELECT Nome FROM TIMES WHERE CodigoTime=${time1[0].CodigoTime};`, {type: QueryTypes.SELECT})
        let nome2 = await sequelize.query(`SELECT Nome FROM TIMES WHERE CodigoTime=${req.params.codigotime};`, {type: QueryTypes.SELECT})
        let atletatimes1 = await sequelize.query(`SELECT ATLETAS.Nome FROM ATLETAS INNER JOIN ATLETATIMES ON ATLETAS.EmailAtleta = ATLETATIMES.EmailAtleta INNER JOIN TIMES ON ATLETATIMES.CodigoTime = TIMES.CodigoTime WHERE TIMES.CodigoTime=${time1[0].CodigoTime};`, {type: QueryTypes.SELECT})
        let atletatimes2 = await sequelize.query(`SELECT ATLETAS.Nome FROM ATLETAS INNER JOIN ATLETATIMES ON ATLETAS.EmailAtleta = ATLETATIMES.EmailAtleta INNER JOIN TIMES ON ATLETATIMES.CodigoTime = TIMES.CodigoTime WHERE TIMES.CodigoTime=${req.params.codigotime};`, {type: QueryTypes.SELECT})
        timepartidas.create({
            CodigoTime: partidas[0].CodigoTime,
            CodigoTime2: req.params.codigotime,
            CodigoPartida: partidas[0].CodigoPartida,
        })
        res.render('partida/entrar/lobby', {nome1: nome1[0], nome2: nome2[0],atletatimes1: atletatimes1,atletatimes2: atletatimes2,partidas: partidas[0],id:req.params.id})
    }
    getPartidas();
})

router.get('/criar/form/:id',function(req,res){
    res.render('partida/criar/form', {id:req.params.id})
})

router.get('/criar/time/:codesporte/:horarioi/:horariof/:data/:minimop/:id',function(req,res){
    async function getTimes(){
        let times = await sequelize.query(`SELECT TIMES.CodigoTime,TIMES.Nome FROM TIMES WHERE IdEsporte=${req.params.codesporte};`, {type: QueryTypes.SELECT})
        res.render('partida/criar/meusTimes', {times: times, codesporte: req.params.codesporte, horarioi: req.params.horarioi, horariof: req.params.horariof, data: req.params.data, minimop: req.params.minimop,id:req.params.id})
    }
    getTimes();
})

router.get('/criar/escolher/:codesporte/:horarioi/:horariof/:data/:minimop/:codigotime/:id',function(req,res){
    async function getQuadras(){
        let quadras = await sequelize.query(`SELECT QUADRAS.CodigoQuadra,QUADRAS.NomeQuadra,QUADRAS.CEP,QUADRAS.Numero,QUADRAS.Preco FROM QUADRAS INNER JOIN ESPORTEQUADRAS ON QUADRAS.CodigoQuadra = ESPORTEQUADRAS.CodigoQuadra WHERE IdEsporte=${req.params.codesporte};`, {type: QueryTypes.SELECT})
        res.render('partida/criar/escolherQuadra', {quadras: quadras, codesporte: req.params.codesporte, horarioi: req.params.horarioi, horariof: req.params.horariof, data: req.params.data, minimop: req.params.minimop,codigotime: req.params.codigotime,id:req.params.id, id:req.params.id})
    }
    getQuadras();
})

router.get('/lobby/:codesporte/:horarioi/:horariof/:data/:minimop/:codquadra/:preco/:codigotime/:id',function(req,res){
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
            let atletatime = await sequelize.query(`SELECT ATLETAS.Nome FROM ATLETAS INNER JOIN ATLETATIMES ON ATLETAS.EmailAtleta = ATLETATIMES.EmailAtleta INNER JOIN TIMES ON ATLETATIMES.CodigoTime = TIMES.CodigoTime WHERE TIMES.CodigoTime=${req.params.codigotime};`, {type: QueryTypes.SELECT})
            let time = await sequelize.query(`SELECT * FROM TIMES WHERE CodigoTime=${req.params.codigotime};`, {type: QueryTypes.SELECT})
            let quadra = await sequelize.query(`SELECT * FROM QUADRAS WHERE CodigoQuadra=${req.params.codquadra};`,{type: QueryTypes.SELECT})
            let esporte = await sequelize.query(`SELECT * FROM ESPORTES WHERE IdEsporte=${req.params.codesporte};`,{type: QueryTypes.SELECT})
            res.render('partida/criar/lobby', {atletatime: atletatime, esporte: esporte[0],quadra: quadra[0],time: time[0],horarioi: req.params.horarioi, horariof: req.params.horariof, data: req.params.data,minimop: req.params.minimop})
        }
        getTimes();
    }).catch((erro)=>{
        res.send("Nao foi possivel realizar o cadastro: " + erro)
    })
})

module.exports = router
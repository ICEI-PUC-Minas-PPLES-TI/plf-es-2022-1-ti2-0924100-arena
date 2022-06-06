const express = require("express")
const router = express.Router()
const path = require('path')
const partida = require('../Models/Partida')
const quadra = require('../Models/Quadra')

router.get('/home',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'partida.html'))
})

router.get('/entrar',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'entrarPartida','entrarPartida.html'))
})

router.get('/criar',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'criarPartida','criarPartida.html'))
})

router.get('/criar/escolher/:codesporte/:horarioi/:horariof/:data/:minimop',function(req,res){
    quadra.findAll({
        raw: true
    }).then(function(quadras){
        res.render('escolherQuadra', {quadras: quadras, codesporte: req.params.codesporte, horarioi: req.params.horarioi, horariof: req.params.horariof, data: req.params.data, minimop: req.params.minimop})
    }).catch(function(err){
        console.log(err)
    })
})

router.get('/lobby/:codesporte/:horarioi/:horariof/:data/:minimop/:codquadra/:preco',function(req,res){
    partida.create({
        CodigoQuadra: req.params.codquadra,
        IdEsporte: req.params.codesporte,
        HorarioInicio: req.params.horarioi,
        HorarioFim: req.params.horariof,
        Data: req.params.data,
        MinimoParticipantes: req.params.minimop,
        Preco: req.params.preco,
    }).then(()=>{
        res.render('lobby', {horarioi: req.params.horarioi, horariof: req.params.horariof, data: req.params.data})
    }).catch((erro)=>{
        res.send("Nao foi possivel realizar o cadastro: " + erro)
    })
})

module.exports = router
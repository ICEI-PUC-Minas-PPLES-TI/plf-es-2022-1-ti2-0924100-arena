const express = require("express")
const router = express.Router()
const path = require('path')
const partida = require('../Models/Partida')

router.get('/home',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'partida.html'))
})

router.get('/criar',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'criarPartida','criarPartida.html'))
})

router.get('/entrar',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'entrarPartida','entrarPartida.html'))
})

router.get('/criar/escolher/:codesporte/:horarioi/:horariof/:data/:minimop',function(req,res){
    partida.all().then(function(partidas){
        res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'criarPartida','escolherQuadra.html'))
    })
    /*partida.create({
        CodigoQuadra: 1,
        CodigoEsporte: req.params.codesporte,
        HorarioInicio: req.params.horarioi,
        HorarioFim: req.params.horariof,
        Data: req.params.data,
        MinimoParticipantes: req.params.minimop*/
})

router.get('/lobby',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'lobby','lobby.html'))
})

module.exports = router
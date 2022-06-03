const express = require("express")
const router = express.Router()
const path = require('path')
const partida = require('../Models/Partida')
const quadra = require('../Models/Quadra')

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
    quadra.findAll().then(function(quadras){
        res.render('escolherQuadra', {quadras: quadras})
    })
    /*partida.create({
        CodigoQuadra: 1,
        IdEsporte: req.params.codesporte,
        HorarioInicio: req.params.horarioi,
        HorarioFim: req.params.horariof,
        Data: req.params.data,
        MinimoParticipantes: req.params.minimop,
        Preco: 0,

    }).then(()=>{
        res.send("Cadastro realizado com sucesso!")
    }).catch((erro)=>{
        res.send("Nao foi possivel realizar o cadastro: " + erro)
    })*/
})

router.get('/lobby',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'lobby','lobby.html'))
})

module.exports = router
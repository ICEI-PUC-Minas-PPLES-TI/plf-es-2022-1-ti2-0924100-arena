const express = require("express")
const router = express.Router()
const path = require('path')

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'partida.html'))
})

router.get('/criar',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'criarPartida','criarPartida.html'))
})

router.get('/criar/escolher',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'criarPartida','escolherQuadra.html'))
})

router.get('/entrar',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'entrarPartida','entrarPartida.html'))
})


module.exports = router
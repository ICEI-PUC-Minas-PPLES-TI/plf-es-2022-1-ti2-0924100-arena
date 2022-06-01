const express = require("express")
const router = express.Router()
const path = require('path')
const partida = require('../Models/Partida')

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'partida.html'))
})

router.get('/criar',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'criarPartida','criarPartida.html'))
})

router.get('/entrar',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'entrarPartida','entrarPartida.html'))
})

router.post('/criar/escolher',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'criarPartida','escolherQuadra.html'))
    /*partida.create({
        CodigoQuadra: 1,
        CodigoEsporte: 1,
        HorarioInicio: req.body.horario_realizacao,
        HorarioFim: req.body.horario_termino,
        Data: req.body.data,
        MinimoParticipantes: req.body.participantes*/
    console.log("Horario de Inicio: "+req.body.horario_realizacao)  
    console.log("Horario de Término: "+req.body.horario_termino)
    console.log("Data: "+req.body.data)
    console.log("Mínimo Participantes: "+req.body.participantes)
})

router.get('/lobby',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'lobby','lobby.html'))
})

module.exports = router
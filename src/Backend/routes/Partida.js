const express = require("express")
const router = express.Router()
const path = require('path')

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'partida', 'partida.html'))
})

router.get('/criar',function(req,res){
    res.send("Pagina de criação de partidas")
})

router.get('/entrar',function(req,res){
    res.send("Pagina de entrar em uma partida")
})


module.exports = router
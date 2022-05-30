const express = require("express")
const router = express.Router()

router.get('/',function(req,res){
    res.send("Pagina principal de partidas")
})

router.get('/criar',function(req,res){
    res.send("Pagina de criação de partidas")
})

router.get('/entrar',function(req,res){
    res.send("Pagina de entrar em uma partida")
})


module.exports = router
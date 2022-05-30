const express = require("express")
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("Pagina pricipal do locatario")
})

router.get('/cadastroQuadra', (req, res)=>{
    res.send("Pagina do cadastro qaudra do locairo")
})

module.exports = router
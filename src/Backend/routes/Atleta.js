const express = require("express")
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("Pagina pricipal do Atleta")
})

module.exports = router
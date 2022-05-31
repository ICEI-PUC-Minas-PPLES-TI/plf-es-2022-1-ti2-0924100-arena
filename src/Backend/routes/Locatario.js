const express = require("express")
const router = express.Router()
const path = require('path')
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'Cadastro_quadra', 'Cadastro_quadra.html'))
})



router.post('/add', function(req, res){
    res.send("Teste do BD: ");
})
module.exports = router
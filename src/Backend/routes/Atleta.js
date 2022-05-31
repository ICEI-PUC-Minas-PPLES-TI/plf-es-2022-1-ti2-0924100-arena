const express = require("express")
const router = express.Router()
const path = require('path')
router.get('/', (req, res)=>{
    res.send("Pagina pricipal do Atleta")
})

//ROTA PARA A PAGINA HOME DO ATLETA:

router.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname, '../', '../','frontend', 'Home', 'homeAtleta.html'))
})


//ROTA PARA A PAGINA DE CADASTRO
router.get('/cadastrar',(req,res)=>{
   // res.sendFile( 'C:/Users/arthu/OneDrive/Área de Trabalho/Programação/exercicios/exercicios_puc/Arena2/plf-es-2022-1-ti2-0924100-arena/src/frontend/CadastroUser' + '/CadastroAtleta.html'  )
   res.sendFile(path.join(__dirname, '../', '../','frontend', 'CadastroUser', 'CadastroAtleta.html'))
})

//rota para receber dados do formulario de cadastro do atleta
router.post('/cadastroRecebido',(req,res)=>{
    res.send("DADOS RECEBIDOS")
})


module.exports = router
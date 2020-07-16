const express = require('express')
const router = express.Router()

const empresa = 'RunTracker Logistica inteligente.'

router.get('/',(req, res) => {
    res.redirect('/login')
})

router.get('/posts',(req, res) => {
    res.send("Página de posts")
})

router.get('/categorias',(req, res) => {
    res.send("Página de categorias")
})

router.get('/app',(req, res) => {
    const telaname = 'Cadastro de clientes'
    res.render("cadastro",{empresa,telaname})
})

router.get('/login',(req, res) => {
    const telaname = 'Login'
    var usuario = ''
    var senha = ''
    res.render("login",{empresa,telaname,usuario,senha})
})

router.post('/home',(req, res) => {
    const telaname = 'Home'
    res.render("home",{telaname})

//    const dados = req.body.usuario   
//    console.log(dados)
//    res.redirect('/app?usuario='+dados)

})


module.exports = router

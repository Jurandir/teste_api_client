const express = require('express')
const router = express.Router()
const login = require('../src/verificacredenciais')

const empresa = 'RunTracker Logistica inteligente.'

router.get('/',(req, res) => {
    const telaname = 'Login'
    res.render("login",{empresa,telaname})
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

router.post('/login',(req, res) => {
    const liberado = login()
    if ( liberado) {
        res.redirect('/app')
    }
    res.redirect('/')
})

module.exports = router

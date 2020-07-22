const express = require('express')
const router = express.Router()

const empresa = 'RunTracker Logistica inteligente.'

router.get('/',(req, res) => {
    const { logado } = req.session 
    if (logado) {
        console.log('@GET /home',logado)
        res.redirect('/home')
    } else {
        console.log('@GET /login',logado)
        res.redirect('/login')
    }
})

router.get('/home',(req, res) => {
    const { logado } = req.session 
    if (logado) {
        console.log('@GET /home',logado)
        res.render("home",{})
    }  else {
        req.flash('alert_msg', 'Usuário não logado !')
        console.log('@GET /login',logado)
        res.redirect('/login')
    }
})

router.get('/logout',(req, res) => {
    req.flash('info_msg', 'Logout realizado !')
    console.log('@GET /logout')
    req.session.logado = false
    res.redirect('/')
})

router.get('/app/cliente',(req, res) => {
    console.log('@GET /app/cliente')
    res.render("cadastro",{})
})

router.get('/login',(req, res) => {
    var usuario = ''
    var senha = ''
    console.log('@GET /login')
    res.render("login",{usuario,senha})
})

router.post('/home',(req, res) => {

    console.log('VAR GLOBAIS /@home',req.session.logado) 
    
    if (!req.session.logado) {
        req.flash('error_msg', 'Login erro :'+req.session.api_msg)  // req => res
        res.redirect('/login')
    } else {

        console.log('@POST /home')    
        res.render("home",{})
    }
})

module.exports = router

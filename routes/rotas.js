const router  = require('express').Router()
const config  = require('../src/config/setup.json')
const bancos  = require('../src/controllers/controllerBancos')
const empresa = config.empresa.nome


router.get('/',(req, res) => {
    const { logado } = req.session 
    if (logado) {
        res.redirect('/home')
    } else {
        res.redirect('/login')
    }
})

router.get('/home',(req, res) => {
    const { logado } = req.session 
    if (logado) {
        res.render("home",{})
    }  else {
        req.flash('alert_msg', 'Usuário não logado !')
        res.redirect('/login')
    }
})

router.get('/logout',(req, res) => {
    req.flash('info_msg', 'Logout realizado !')
    req.session.logado = false
    res.redirect('/')
})

router.get('/app/cliente',(req, res) => {
    res.render("cadastro",{})
})

router.get('/app/bancos',(req, res) => {
    res.render("cadBanco",{bancos})
})


router.get('/login',(req, res) => {
    var usuario = ''
    var senha = ''

    const { logado } = req.session 
    if (logado) {
        res.render("home",{})
    }  else {
        res.render("login",{usuario,senha})
    }

})

module.exports = router

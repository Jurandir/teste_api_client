const router  = require('express').Router()
const config  = require('../src/config/setup.json')
const bancos  = require('../src/controllers/controllerBancos')
const datasession = require('../src/utils/DataSession')
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
    const dados = datasession.open(req)
    res.render("cadastro",dados)
})

router.get('/app/bancos',(req, res) => {
    var dados;
    datasession.set(req)
    const variaveis = datasession.get(req)

    bancos(variaveis).then((ret)=>{
        dados = ret
    })
    
    console.log('======> /app/bancos', dados )
    
    res.render("cadBancos",dados)

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

const router  = require('express').Router()
const config  = require('../src/config/setup.json')
const bancos  = require('../src/controllers/controllerBancos')
const datasession = require('../src/utils/DataSession')
const empresa = config.empresa.nome
var teste_var = 0


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
    const dados = {dados : { empresa } }
    if (logado) {
        console.log('HOME->',dados)
        res.render("home",dados)
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

    datasession.set(req)
    const variaveis = datasession.get(req)

    var paginas = {
        linhas: 0,
        linhas_pagina: 10,
        pagina: 1,
        lista: {}
    }

    bancos(variaveis).then((dados)=>{

       
        


        const array = ( dados.dados );

        console.log('TypeOF :', typeof(array))

        //if (!array === undefined){ 
            //console.log('(XX) array:', array )

            //array.filter(function(currentValue, index, arr), thisValue)


            linha_ini = (paginas.pagina-1) * paginas.linhas_pagina
            linha_fim = (paginas.pagina) * paginas.linhas_pagina
            paginas.linhas = array.length

            paginas.lista = array.filter((item,index)=>{

                return ( index >= linha_ini && index < linha_fim )

            })
        //}

        console.log('Paginas:', paginas )

        ++teste_var
        console.log('Contador >>> :', teste_var )

        res.render("cadBancos",{ dados:dados, json: JSON.stringify(dados.dados) } )

    }).catch( (err) => {
        console.log('Err', err ) 
    })
    
})


router.get('/login',(req, res) => {
    const dados = {dados : { empresa } }
    var usuario = ''
    var senha = ''

    const { logado } = req.session 
    if (logado) {
            console.log('LOGIN->HOME->',dados)
            res.render("home",dados)
    }  else {
        res.render("login",{usuario,senha})
    }

})

module.exports = router

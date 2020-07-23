const express    = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app        = express()
const rotas      = require('./routes/rotas')
const session    = require("express-session")
const flash      = require("connect-flash")
const auth       = require('./src/middleware/auth')

// sessão ( Flesh é sessão temporaria )
app.use(session({
    secret: "chavedeseguranca",
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

// middleware ( var globais )
app.use((req, res, next) => {
    res.locals.success_msg  = req.flash("success_msg")
    res.locals.error_msg    = req.flash("error_msg")
    res.locals.info_msg     = req.flash("info_msg")
    res.locals.alert_msg    = req.flash("alert_msg")

    if (req.session.logado  === undefined) {
        req.session.logado     = false
        req.session.user_id    = null
        req.session.user_name  = null        
        req.session.session_id = null
        req.session.api_token  = null
        req.session.api_msg    = null
    }
    next()
})

// Config - Setup
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/js', express.static(__dirname  + '/node_modules/bootstrap/dist/js'));  // redirect bootstrap JS
app.use('/js', express.static(__dirname  + '/node_modules/jquery/dist'));        // redirect JS jQuery
app.use('/js', express.static(__dirname  + '/node_modules/popper.js/dist/umd')); // redirect popper.js

// assets
app.use('/img', express.static(__dirname + '/assets/img')); // IMG
app.use('/css', express.static(__dirname + '/assets/css')); // CSS
app.use('/js' , express.static(__dirname + '/assets/js'));  // JS

// Views - Templates
app.engine('handlebars',handlebars({defaltLayout: 'main', partialsDir : __dirname+'/views/partials'}))
app.set('view engine','handlebars')

// Middleware
app.use('/login/check',auth);

// Rotas
app.use('/',rotas)

// Serviço
const PORT = 8081
const HOST = 'http:/localhost:'
app.listen(PORT,() => {
    console.log('=========================================================================================================================')
    console.log('Servidor rodando...',HOST+PORT)
    console.log('=========================================================================================================================')
})
const express      = require('express')
const handlebars   = require('express-handlebars')
const bodyParser   = require('body-parser')
const app          = express()
const logger       = require('morgan')
const cookieParser = require('cookie-parser')
const rotas        = require('./routes/rotas')
const session      = require("express-session")
const flash        = require("connect-flash")
const auth         = require('./src/middleware/auth')
const datasession  = require('./src/utils/DataSession')

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

    const dados = datasession.open(req)
    console.log('REQ:',dados)
    next()
})

// Config - Setup
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

// Bootstrap
app.use('/css', express.static(__dirname  + '/node_modules/bootstrap/dist/css'))  // redirect CSS bootstrap
app.use('/css', express.static(__dirname  + '/node_modules/font-awesome/css'))    // redirect CSS font-awesome
app.use('/js' , express.static(__dirname  + '/node_modules/bootstrap/dist/js'))   // redirect bootstrap JS
app.use('/js' , express.static(__dirname  + '/node_modules/jquery/dist'))         // redirect JS jQuery
app.use('/js' , express.static(__dirname  + '/node_modules/popper.js/dist/umd'))  // redirect popper.js

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
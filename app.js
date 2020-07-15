const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')

// Config - Setup
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Views - Templates
app.engine('handlebars',handlebars({defaltLayout: 'main', partialsDir : __dirname+'/views/partials'}))
app.set('view engine','handlebars')

// Rotas
app.use('/',admin)

// Bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/js', express.static(__dirname  + '/node_modules/bootstrap/dist/js'));  // redirect bootstrap JS
app.use('/js', express.static(__dirname  + '/node_modules/jquery/dist'));        // redirect JS jQuery
app.use('/js', express.static(__dirname  + '/node_modules/popper.js/dist/umd')); // redirect popper.js

// assets
app.use('/img', express.static(__dirname + '/assets/img')); // Imagens
app.use('/css', express.static(__dirname + '/assets/css')); // CSS
app.use('/js' , express.static(__dirname + '/assets/js'));  // JS

// Serviço
const PORT = 8081
app.listen(PORT,() => {
    console.log('Servidor rodando... http:/localhost:'+PORT)
})
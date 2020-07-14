const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
// const mongoose = require('mongoose')

// Config - Setup
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Views - Templates
app.engine('handlebars',handlebars({defaltLayout: 'main'}))
app.set('view engine','handlebars')

// Rotas
app.use('/',admin)

// Bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist/umd')); // redirect popper.js

// Serviço
const PORT = 8081
app.listen(PORT,() => {
    console.log('Servidor rodando...')
})
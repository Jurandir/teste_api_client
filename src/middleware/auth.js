const api_getToken = require('../api/api_getToken')
const isEmail      = require('../utils/isEmail')
const setup        = require('../config/setup.json')
const URL_API      = setup.api.url

const auth = (req, res, next) => {
  const {usuario, senha} = req.body
  const method = req.method

  console.log('auth.js:',method,usuario,senha)

  if (method !== 'POST') {
      console.log('01',method)
      res.status(401)
      req.flash('info_msg', `Entre com suas "Credenciais"`)
      res.redirect('/login')
      next()

  } else 
  if ( !isEmail(usuario) ) {
    console.log('03',method)
    res.status(401)
    req.flash('alert_msg', `Email informado não está em um formato valído!`)
    res.redirect('/login')
    next()

 } else {
      
      const url = URL_API+'/login'
      const user = {
        "email": usuario,
        "password": senha
      }

      console.log('04',method,url)

      api_getToken(url , user ).then(function(dados) {

        req.session.logado     = true
        req.session.user_id    = dados.user.id
        req.session.user_name  = dados.user.username          
        req.session.session_id = req.sessionID 
        req.session.api_token  = dados.token.type+' '+dados.token.token
        req.session.api_msg    = 'Sucesso 200 ok'
        console.log('API Dados:',dados )

        res.redirect('/login')
        next()

      }).catch( (err) => { 

        req.session.logado       = false
        req.session.user_id      = null
        req.session.user_name    = null
        req.session.session_id   = null
        req.session.api_token    = null
        req.session.api_msg      = err.message
        console.log('API Erro:',err.message)
        
        req.flash('alert_msg', `Credenciais não validas "${req.session.api_msg}", Email do usuário ou Senha invalidas!`)
        res.redirect('/login')
        next()
    
      })
  }      
}  

module.exports = auth
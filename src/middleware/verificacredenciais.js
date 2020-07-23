const axios = require("axios")
const api_getToken = require('../api/api_getToken')

const URL_API = 'http://localhost:3333'

const verificacredenciais = (req, res, next) => {
  const {usuario, senha} = req.body
  const referer = req.header('Referer')
  const method = req.method

  

  if ((referer === undefined) || (referer === URL_API+'\login')){
    console.log(1,'referer === undefined' , 'method:',method)  
    next()
  } else 
  if ((!referer === URL_API+'\login') && (method === 'GET')) {
    console.log(2,'<> de LOGIN', 'method:',method)  
    next()
  } else 
  if ((!referer === URL_API+'\login') && (!method === 'GET')) {
      console.log(3,'==========>   END()',referer , 'method:',method)  
      res.end()
  } else {
          
      if (usuario) {

        const url = URL_API+'/login'
        const user = {
          "email": usuario,
          "password": senha
        }

        api_getToken(url , user ).then(function(dados) {

          req.session.logado     = true
          req.session.user_id    = dados.user.id
          req.session.user_name  = dados.user.username          
          req.session.session_id = req.sessionID 
          req.session.api_token  = dados.token.type+' '+dados.token.token
          req.session.api_msg    = 'Sucesso 200 ok'
          console.log('API Dados:',dados )
          next()

        }).catch( (err) => { 

          req.session.logado       = false
          req.session.user_id      = null
          req.session.user_name    = null
          req.session.session_id   = null
          req.session.api_token    = null
          req.session.api_msg      = err.message
          console.log('API Erro:',err.message)
          req.flash('error_msg', `Credenciais não validas $(req.session.api_msg)`)
          next()
        })
      }
      
}  
};

module.exports = verificacredenciais

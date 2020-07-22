const axios = require("axios")
const { default: Axios } = require('axios')

const URL_API = 'http://localhost:3333'

const verificacredenciais = (req, res, next) => {
  const {usuario, senha} = req.body
  const referer = req.header('Referer')
  const method = req.method

  console.log('========================================================================')
  console.log('usuario:',usuario,' senha:',senha,' referer:',referer,'method:',method)
  console.log(req.body)
  console.log('========================================================================')

  if ((referer === undefined) || (referer === URL_API+'\login')){
    console.log('referer === undefined' , 'method:',method)  
    next()
  } else 
  if ((!referer === URL_API+'\login') && (method === 'GET')) {
    console.log('<> de LOGIN', 'method:',method)  
    next()
  } else 
  if ((!referer === URL_API+'\login') && (!method === 'GET')) {
      console.log('==========>   END()',referer , 'method:',method)  
      res.end()
  } else {
    
      console.log('usuario:',usuario,' senha:',senha,' referer:',referer,'method:',method)
      console.log('========================================================================')
      
      if (usuario) {
        
        req.session.acesso = {
          email: usuario,
          password: senha,
          session: req.sessionID,
          views: 1
        }         
        
        Axios.post(URL_API+"/authenticate", {email: usuario, password: senha }, { "Content-Type": 'application/json'  } ).then(  (resposta) => {  

          // { headers: {Authorization : 'Bearer ' + token}
          // req.headers['x-access-token'];

          req.session.acesso = {
            token: resposta.date.type + ' '+ resposta.data.token
          }              

          console.log('Rsposta API:')
          console.log(resposta.data)

          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Authorization', req.session.acesso.token )
          res.setHeader('Accept','*/*')

          req.session.logado     = true
          req.session.user_id    = 0
          req.session.session_id = req.sessionID
          req.session.api_token  = req.session.acesso.tokenl
          req.session.api_msg    = null
          console.log('VAR GLOBAIS',req.session.logado, req.sessionID, req.session.acesso.tokenl )            

          
        }).catch( (err) => { 

          req.session.logado       = false
          req.session.user_id      = null
          req.session.session_id   = null
          req.session.api_token    = null
          req.session.api_msg      = err.message
          console.log('Erro da API:'+err.message)

          //res.status(401).send('Unauthorized API');
          //next(401);

        })
      } else {
        res.setHeader('Content-Type', 'application/json')
       // res.setHeader('Authorization', req.session.acesso.token )
       // res.setHeader('Accept','*/*')

      }

      console.log('Session:', req.sessionID )
        
      next()
}  
};

module.exports = verificacredenciais

  //console.log('BODY ================================');
  //console.log( req.body );
  //console.log('HEADERS ================================');
  //console.log( JSON.stringify(req.headers.origin)  );
  //console.log( JSON.stringify(req.headers.referer) ); 
  //console.log( JSON.stringify(req.headers.cookie)  ); 
  //console.log( JSON.stringify(req.headers) ); // .origin
  //console.log( JSON.stringify(req.headers) ); // .referer
  //console.log('req ================================');
  //console.log( 'param',req.param );
  //console.log( 'query',req.query );
  //console.log( 'method',req.method );
  //console.log( 'url',req.url );

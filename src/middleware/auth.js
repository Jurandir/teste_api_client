const api_getToken = require('../api/api_getToken')

const URL_API = 'http://localhost:3333'

const auth = (req, res, next) => {
  const {usuario, senha} = req.body
  const method = req.method
  
  if (!method === 'POST') {
    res.status(401)
  }

  console.log('auth.js:',method,usuario,senha)
  res.redirect('/').end()
      
}  

module.exports = auth

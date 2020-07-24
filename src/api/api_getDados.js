const api          = require('axios')
const setup        = require('../config/setup.json')

//var config = {
//    headers: { headers: { Authorization: AuthStr } }
//  };


api.defaults.baseURL = setup.api.url
// api.defaults.headers.common['Authorization'] = req.session.api_token
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const api_getDados = (endpoint,req) =>
    api.get(endpoint)
    .then( (res) => {
         return res.data
    })
    .catch( (err) => {
		 return err
	})   

module.exports = api_getDados

// uso
//api_getDados('/bancos').then( (dados) => {
//	console.log(dados)
//})

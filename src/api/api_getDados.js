const api          = require('axios')
const setup        = require('../config/setup.json')

async function api_getDados(endpoint,api_token) {

	
    api.defaults.baseURL                         = setup.api.url
    api.defaults.headers.common['Authorization'] = api_token
    api.defaults.headers.post['Content-Type']    = 'application/x-www-form-urlencoded'	
	
	var ret
	await api.get(endpoint).then( (response) => {
          ret = response
    }).catch( (err) => {
		  ret = err
	})
  
    return ret  
}
  
module.exports = api_getDados

// Uso :

//	const api = require('./api_getDados')
//	const AUTH_TOKEN   = 'bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU5NDkyMjQ2OX0.is3Far1TOphJPCG_46eTCZvEakoU83kBOXU9pilrGaA'
//
//	api('/bancos',AUTH_TOKEN).then( ((response) => {
//	    console.log( response.data )	
//	}) )

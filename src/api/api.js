const axios = require('axios')
const { default: Axios } = require('axios')

const url = 'http://localhost:3333/authenticate'
const usuario = {
	"email": "jurandir.ferreira@gmail.com",
	"password": "polaris"
}

const api = (url,usuario) => 
Axios.post(url, usuario, {})
.then(function(res){
    return res.data
})

module.exports = api
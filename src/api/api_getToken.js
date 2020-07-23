const axios = require('axios')
const { default: Axios } = require('axios')

const api_getToken = (url,user) => 
Axios.post(url, user, {})
.then( async function(res){
    return await res.data
})

module.exports = api_getToken
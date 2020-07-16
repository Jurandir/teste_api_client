const axios = require("axios")

const verificacredenciais = (req, res, next) => {

 //  axios.post("http://localhost:3333/authenticate",{ email: "x@x.com.br", password: "12345678"}).then(  (resposta) => {
  //      console.log(resposta.date)
  //  }).catch( (err) => { 
  //    console.log( err )
  //  })


  console.log('BODY ================================');
  console.log( req.body );
  console.log('HEADERS ================================');
  console.log( req.headers.origin );
  console.log( req.headers.referer );
  console.log('req ================================');
  console.log( 'param',req.param );
  console.log( 'query',req.query );
  console.log( 'method',req.method );
  console.log( 'url',req.url );
    
    next();
};

module.exports = verificacredenciais
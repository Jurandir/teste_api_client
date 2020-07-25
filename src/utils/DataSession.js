class DataSession {
    constructor() {
        this.dados = {}
    }
    open(req){
        if (req.session.logado  === undefined) {
            this.start(req)
        } else {
            this.set(req)
        }
        this.get()        
    }
    set(req) {
        this.dados = { 
            logado:     req.session.logado,
            user_id:    req.session.user_id,
            user_name:  req.session.user_name,        
            session_id: req.session.session_id,
            api_token:  req.session.api_token,
            api_msg:    req.session.api_msg
        }
    }
    setInSession(req) {
            req.session.logado     = this.dados.logado
            req.session.user_id    = this.dados.user_id
            req.session.user_name  = this.dados.user_name
            req.session.session_id = this.dados.session_id
            req.session.api_token  = this.dados.api_token
            req.session.api_msg    = this.dados.api_msg
    }
    start(req) {
        this.dados = { 
            logado:     false,
            user_id:    null,
            user_name:  null,        
            session_id: req.sessionID,
            api_token:  null,
            api_msg:    null
        }
        this.setInSession(req)
    }
	get() {
		return this.dados
	}
  }

  module.exports = new DataSession()
  
  // Uso :
	// const datasession = require('./DataSession')
	//datasession.open(req)
	//console.log( datasession.get() )

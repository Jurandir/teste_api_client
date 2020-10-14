const Padrao = require('./Cadastro').Cadastro

class Banco extends Padrao {
    constructor() {
        const tabela = 'bancos'
        const titulo = 'Cadastro de Bancos'

        super(tabela,titulo);
        this.start()
    }

    start() {
        // configura a tela de CRUD
        this.crud.active_new     = true
        this.crud.active_edit    = true
        this.crud.active_detail  = true
        this.crud.active_delete  = true
        this.crud.active_report  = true
        this.crud.active_options = true        
        // configura os campos
        this.addId('id_bancos')
        this.addField('co_banco','co_banco','string',10,null,'input')
        this.addField('no_bancos','no_bancos','string',60,null,'input')
        this.addField('no_site','no_site','string',60,null,'input')
    }

}  

module.exports.Banco = new Banco()
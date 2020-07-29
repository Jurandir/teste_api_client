const Padrao = require('./Cadastro').Cadastro

class Banco extends Padrao {
    constructor() {
        const tabela = 'bancos'
        const titulo = 'Cadastro de Bancos'

        super(tabela,titulo);
        this.start()
    }

    start() {
        this.addId('id_bancos')
        this.addField('co_banco','co_banco','string',10,null,'input')
        this.addField('no_bancos','no_bancos','string',60,null,'input')
        this.addField('no_site','no_site','string',60,null,'input')
    }

}  

module.exports.Banco = new Banco()
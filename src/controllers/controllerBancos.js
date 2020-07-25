const api_getDados = require('../api/api_getDados')


const Banco = {
    api: "/bancos",
    tela: "Cadastro de Bancos",
    dados: {}
}
const controllerBancos = async (req) => {
    await api_getDados('/bancos',req).then( (retorno) => {
	    Banco.dados = retorno
    })
    return Banco
}

module.exports = controllerBancos
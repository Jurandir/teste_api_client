const api_getDados = require('../api/api_getDados')
const { dados } = require('../utils/DataSession')

const controllerBancos = async (variaveis) => {
    var Banco = {}
    
    await api_getDados('/bancos',variaveis.api_token).then( (retorno) => {
        const token = variaveis.api_token
        Banco = {
            api: "/bancos",
            tela: "Cadastro de Bancos",
            token: token,
            dados: retorno.data,
            erro: false,
            msg: ""
        }    
    }).catch((err) => {
        Banco.dados = {}
        Banco.erro  = true
        Banco.msg = err    
    })

    return Banco
}

module.exports = controllerBancos
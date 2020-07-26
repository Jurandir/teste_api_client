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
            heads: ["Id.","Código","Nome","Site" ],
            fields: ["id_bancos","co_banco","no_bancos","no_site" ],
            erro: false,
            msg: "",
            active_new: true,
            active_edit: true,
            active_detail: true,
            active_delete: true,
            active_report: true,
            active_options: true,
            dados: retorno.data
        }    
    }).catch((err) => {
        Banco.dados = {}
        Banco.erro  = true
        Banco.msg = err    
    })

    return Banco
}

module.exports = controllerBancos
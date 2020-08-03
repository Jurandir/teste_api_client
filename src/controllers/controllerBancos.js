const api_getDados = require('../api/api_getDados')
//const { dados } = require('../utils/DataSession')
const config  = require('../src/config/setup.json')

const controllerBancos = async (variaveis) => {
    var conteudo = {}
    
    await api_getDados('/bancos',variaveis.api_token).then( (retorno) => {
        const token = variaveis.api_token
        conteudo = {
            empresa: config.empresa,
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
        conteudo.dados = {}
        conteudo.erro  = true
        conteudo.msg = err    
    })

    return conteudo
}

module.exports = controllerBancos
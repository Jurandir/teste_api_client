module.exports.Cadastro = class Cadastro {
    constructor(tabela,titulo) {
        this.tabela = tabela
        this.titulo = titulo
        this.quantidade = 0
        this.dados = {
            nometabela: this.tabela,
            nomecadastro: this.titulo,
            campos: []
        }
        this.crud = {
            active_new:     true,
            active_edit:    true,
            active_detail:  true,
            active_delete:  true,
            active_report:  true,
            active_options: true,
        }
    }

    init( tabela, titulo) {
        this.dados.nometabela = tabela
        this.dados.nomecadastro = titulo
    }

    addId(nomefisico) {
        this.addField('id',nomefisico,'integer',10,null,'input')
    }

    addField(nomelogico,nomefisico,tipo,tamanho,valor,componente) {
        this.dados.campos.push({
            idx: this.quantidade,
            nomelogico: nomelogico,
            nomefisico: nomefisico,
            tipo: tipo,
            tamanho: tamanho,
            valor: valor,
            componente: componente
        } )
        this.quantidade++
    }

	getFields() {
		return this.dados.campos
    }

    getValor(campo) {
        return this.dados.campos.find( element => element.nomelogico === campo ).valor
    }

    getValoresLogicos() {
        return this.dados.campos.reduce( function( obj, elem ) {            
            obj[ elem.nomelogico ] = elem.valor
            return obj
        }, {} )
    }

    getValoresFisicos() {
        return this.dados.campos.reduce( function( obj, elem ) {            
            obj[ elem.nomefisico ] = elem.valor
            return obj
        }, {} )
    }

    setValor(campo,vlr) {
        const elemento = this.dados.campos.filter( (obj) => (obj.nomelogico === campo) )[0]
        const idx = this.dados.campos.indexOf(elemento)
        this.dados.campos[idx].valor = vlr  
        return this.dados.campos[idx].valor 
    }    

    nomeTabela() {
        return this.dados.nometabela
    }

  }
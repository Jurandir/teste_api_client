const config  = require('../config/setup.json')
module.exports.Pagina = class Pagina{
    constructor() {
        this.linhas        = 0                              // Total de linhas na tabela ou entidade
        this.linhas_pagina = config.pagina.linhas           // Quantidade de linhas por pagina
        this.linha_ini     = 1                              // Linha inicial da pagina atual
        this.linha_fim     = this.linhas_pagina             // Linha Final da pagina atual
        this.pagina        = 1                              // Pagina atual
        this.paginas       = 1                              // Total de Paginas
        this.lista         = {}                             // Dados da pagina atual
    }

    lerPagina(pagina,dados){
        this.linhas = array.length 
        this.paginas = Math.trunc( this.linhas / this.linhas_pagina )+1
        if ( pagina < 1) {
            pagina = 1
        }
        if ( pagina > this.paginas) {
            pagina = this.paginas
        }
        this.pagina = pagina
        this.linha_ini = (pagina-1) * this.linhas_pagina
        this.linha_fim = (pagina)   * this.linhas_pagina
        if (this.linha_fim > this.linhas ) {
            this.linha_fim = this.linhas
        }
        if (this.linha_ini < 1 ) {
            this.linha_ini = 1
        }
        this.lista = dados.filter((item,index)=>{
            return ( index >= linha_ini && index < linha_fim )
        })        

        console.log("Dados Lido [Pagina]");

        return this.lista
    }

    lerProximaPagina(dados){
        ++this.pagina
        return lerPagina(this.pagina,dados)    
    }

    lerPaginaAnterior(dados){
        --this.pagina
        return lerPagina(this.pagina,dados)    
    }

    lerPrimeiraPagina(dados){
        this.pagina = 1
        return lerPagina(this.pagina,dados)    
    }

    lerUltimaPagina(dados){
        this.pagina = this.paginas
        return lerPagina(this.pagina,dados)    
    }
}


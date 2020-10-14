
const dados2 = [
    { id_bancos: "101", co_banco: "CX" , no_bancos: "Caixa da Empresa"},
    { id_bancos: "102", co_banco: "000", no_bancos: "Banco Bankpar S.A."},
    { id_bancos: "103", co_banco: "M15", no_bancos: "Banco BRJ S.A."},
    { id_bancos: "111", co_banco: "M22", no_bancos: "Banco Honda S.A."},
    { id_bancos: "112", co_banco: "M11", no_bancos: "Banco IBM S.A."},
    { id_bancos: "113", co_banco: "M09", no_bancos: "Banco Itaucred Financiamentos S.A."},
    { id_bancos: "000", co_banco: "000", no_bancos: "Banco GMAC S.A."},
    { id_bancos: "101", co_banco: "CX" , no_bancos: "Caixa da Empresa"},
    { id_bancos: "102", co_banco: "000", no_bancos: "Banco Bankpar S.A."},
    { id_bancos: "103", co_banco: "M15", no_bancos: "Banco BRJ S.A."},
    { id_bancos: "104", co_banco: "M08", no_bancos: "Banco Citicard S.A."},
    { id_bancos: "105", co_banco: "M19", no_bancos: "Banco CNH Capital S.A."},
    { id_bancos: "106", co_banco: "M21", no_bancos: "Banco Daimlerchrysler S.A."},
    { id_bancos: "107", co_banco: "M06", no_bancos: "Banco de Lage Landen Brasil S.A."},
    { id_bancos: "108", co_banco: "M03", no_bancos: "Banco Fiat S.A."},
    { id_bancos: "109", co_banco: "M18", no_bancos: "Banco Ford S.A."},
    { id_bancos: "111", co_banco: "M22", no_bancos: "Banco Honda S.A."},
    { id_bancos: "112", co_banco: "M11", no_bancos: "Banco IBM S.A."},
    { id_bancos: "113", co_banco: "M09", no_bancos: "Banco Itaucred Financiamentos S.A."}
]

//dados2.forEach( item => {
//    console.log( item )
//})

/*
var b = 0
var a = dados2.map((item)=>{
        ++b
        if ( b < 5) {
            return item
        }
})
console.log( a )
*/

var b = 0
var a = dados2.filter((item)=>{
    ++b
    return ( b < 5)
})

console.log( a )
const bco = require('../models/Banco')
const banco = bco.Banco


console.log('nomeTabela',banco.nomeTabela())

console.log('setValor',banco.setValor('co_banco','001'))

console.log('getValor',banco.getValor('co_banco'))

console.log('getFields',banco.getFields('co_banco'))

console.log('getFields',banco.getValoresLogicos())

console.log('getFields',banco.getValoresFisicos())



// colocar titulo no addcampo
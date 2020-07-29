module.exports.Pessoa = class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    falar(){
        console.log("Olá mundo");
    }
 }

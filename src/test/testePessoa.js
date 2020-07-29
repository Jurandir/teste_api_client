const Pessoa = require('./Pessoa').Pessoa

class Professor extends Pessoa{
    constructor(nome, idade, materia){
        // Chamada do construtor da classe mãe(Pessoa)
        // o super é uma representação do construtor da classe mãe
        // E sempre deve ser a primeira linha na classe filha
        super(nome, idade);
        this.materia = materia;
    }
    darAula(){
        console.log("Agora vamos dar aula de " + this.materia);
    }
 }

 var lima = new Professor(20, "Valor qualquer","JS")

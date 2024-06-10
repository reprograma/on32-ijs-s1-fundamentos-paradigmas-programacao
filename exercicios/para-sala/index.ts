//exercicios feitos pela profa aqui
let numero:number = 10;
console.log(numero)

let nome:string = "Luana Cristina"
console.log(nome)

const pi:number = 3.14
console.log(pi)

function saudacao(nome:string, idade:number){
    console.log(`Olá ${nome} e tenho ${idade} anos`)
}

const nomeUsuario:string = "Luana Cristina"
const idade:number = 37
saudacao(nomeUsuario, idade)

//objeto
const pessoa ={
    nome: "Luana",
    idade: 36,
    cidade: "Camaragibe",
    apresentar: function():string{
        return `Olá meu nome é ${this.nome}, eu tenho ${this.idade} e sou da cidade ${this.cidade}`
    }
}

console.log(pessoa.apresentar())

//classe
class Carro {
    marca:string;
    modelo:string;
    ano:number
    constructor(marca:string, modelo:string, ano:number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const meuCarro = new Carro("Toyota", "Corolla", 2024)
console.log(meuCarro)
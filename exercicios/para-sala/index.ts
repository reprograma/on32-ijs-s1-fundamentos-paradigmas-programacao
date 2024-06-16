let numero:number = 10;
console.log(numero)

let nome:string = 'Ana Claudia'
console.log(nome)

const pi:number = 3.14
console.log(pi)

function saudacao (nome:string){
    console.log(`Olá ${nome}`)
}

saudacao(nome)

// Objeto 
const pessoa = {
    nome: "Alice",
    idade: 15,
    cidade: "Salvador",
    apresentar: function():string{
        return `Olá meu é ${this.nome}, eu tenho ${this.idade} e sou da cidade de ${this.cidade}`
    }
}

console.log(pessoa.apresentar())

// Classe
class Carro {
    marca:string;
    modelo:string;
    ano:number

    constructor(marca:string, modelo:string, ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano ;  
    }

}

const meuCarro = new Carro("Toyota", "Corola", 2024)

console.log(meuCarro)
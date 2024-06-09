//exercicios feitos pela profa aqui

// let numero: number = 10
// console.log(numero)

// let nome:string = 'Daniele'
// console.log(nome)

// const pi:number = 3.14
// console.log(pi)

// //função
// function saudacao(nome:string, idade: number) {
//     console.log(`Olá meu nome é ${nome} e tenho ${idade} anos`)
// }

// const nomeUsuario:string = 'Daniele'
// const idade:number = 23
// saudacao(nomeUsuario, idade)

//ctrl dois pontos - p comentar e descomentar

//OBJETO

// const pessoa = {
//     nome: 'Daniele',
//     idade: 23,
//     cidade: 'Salvador',
//     apresentar: function():string {
//         return `Olá meu nome é ${this.nome}, eu tenho ${this.idade} anos e sou da cidade de ${this.cidade}`
//     }
// }

// console.log(pessoa.apresentar())

//CLASSE
class Carro {
    marca:string;
    modelo: string;
    ano: number

    constructor(marca:string, modelo:string, ano:number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano
    }
}

const meuCarro = new Carro('Toyota', 'Corola', 2020)
console.log(meuCarro)

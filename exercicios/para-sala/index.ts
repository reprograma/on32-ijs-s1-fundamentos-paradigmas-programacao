// let numero:number = 10;
// console.log(numero)

// let nome:string = "Rafaela";
// console.log(nome)

// const pi:number = 3.14;
// console.log(pi)

// function saudacao(nome:string, idade:number) {
//     console.log(`Olá eu me chamo ${nome} e tenho ${idade} anos`); // interpolação ``
// }

// const nomeUsuario:string = "Rafaela"
// const idadeUsuario:number = 34

// saudacao(nomeUsuario, idadeUsuario)

// ctrl + : seleciona tudo

// OBJETO

// const pessoa = { // não é obrigatório tipar os objetos
//     nome: "Alice",
//     idade: 15,
//     cidade: "Salvador",
//     apresentar: function (): string {
//         return `Olá meu nome é ${this.nome}, eu tenho ${this.idade} anos e sou da cidade de ${this.cidade}`
//     } // sempre utilizar o this
// }

// console.log(pessoa.apresentar()) // acessando a função () aprensentar, mas também poderia ser qualquer objeto dentro de pessoa

// CLASSE

class Carro { // sempre com letra Maiúscula
    marca: string; // atributo
    modelo: string;
    ano: number

    constructor(marca: string, modelo: string, ano: number) { // método com os parâmetros dentro
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

// instanciar essa classe
const meuCarro = new Carro("Toyota", "Corolla", 2024);
console.log(meuCarro)
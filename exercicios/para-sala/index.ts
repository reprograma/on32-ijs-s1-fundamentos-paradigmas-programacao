//let numero: number = 7;
//console.log(numero);

//let nome: string = "Samy Silva";
//console.log(nome);

//const pi: number = 3.14;
//console.log(pi);

//FUNÇÃO

// function saudacao(nome:string, idade:number){
//     console.log(`Olá! Eu me chamo ${nome} e tenho ${idade} anos.`);
// }
// const nomeUsuario:string = "Samy";
// let idade:number = 34;
// saudacao(nomeUsuario, idade)

// OBJETO

// const pessoa = {
//     nome: "Samy",
//     idade: 34,
//     cidade: "Porto Alegre",
//     apresentar: function():string{
//         return `Olá meu nome é ${this.nome}, eu tenho ${this.idade} e mora na cidade de ${this.cidade}.`
//     }
// }

// console.log(pessoa.apresentar())

//CLASSE

class Carro{
    marca:string;
    modelo:string;
    ano:number;

    constructor(marca:string, modelo:string, ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const meuCarro = new Carro("Renault", "Logan", 2015);
console.log(meuCarro);
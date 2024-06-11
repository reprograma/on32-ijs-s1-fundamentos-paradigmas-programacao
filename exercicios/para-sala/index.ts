
// let numero:number = 10;
// console.log(numero)

// let nome:string = "Natalia";
// console.log(nome)

// const pi:number = 3.14;
// console.log(pi)


// função
// function saudacao(nome:string, idade:number) {
//     console.log(`Olá eu me chamo ${nome} e tenho ${idade} anos.`);
// }
// const nomeUsuario:string = "Natália"
// const idade:number = 26;
// saudacao(nomeUsuario, idade)

//OBJETO
// const pessoa = {
//     nome:"Alice",
//     idade:15,
//     cidade:"Salvador",
//     apresentar: function():string {
//         return `Olá meu nome é ${this.nome}, eu tenho ${this.idade} e sou da cidade de ${this.cidade}`
//     }
// }

// console.log(pessoa.apresentar())

// CLASSE

class Carro {
    marca:string;
    modelo:string;
    ano:number

    constructor(marca:string, modelo:string, ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const meuCarro = new Carro("Toyota", "Corolla", 2024);
console.log(meuCarro)



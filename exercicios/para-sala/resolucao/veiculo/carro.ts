// let numero:number = 10;
// console.log(numero)

// let nome:string = "Mellyssa";
// console.log(nome)

// const pi:number = 3.14;
// console.log(pi)

// function saudacao(nome:string) {
//     console.log( `Olá ${nome} `);
//     //console.log("Ola" + nome)
// }

// const nomeUsuario:string = "Mellyssa"
// saudacao(nomeUsuario)

//CLASSE

class Carro{
    marca:string;
    modelo:string;
    ano:number

    constructor(marca:string, modelo:string, ano:number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}
const meuCarro = new Carro("Volkswagen", "Nivus", 2024)
console.log(meuCarro)


// exercicios feitos pela profa aqui
// let numero:number = 10;
// console.log(numero)

// let nome:string = 'Larildes';

// console.log(nome)

// const pi:number = 3.14;
// console.log(pi)

// function saudacao(nome:string, idade:number) {
//     console.log(`Olá, ${nome}, vi aqui que vc tem ${idade} anos.`);
// }

// const nomeUsuario:string = 'Larildes';

// saudacao(nomeUsuario, 12)

//Objeto
// const pessoa = {
//     nome:"Lara",
//     idade:12,
//     cidade:"Rio Verde das Aboba",
//     apresentar: function():string {
//         return `Olá, me chamo ${this.nome}, tenho ${this.idade} anos e sou de ${this.cidade}`
//     }
// }

// console.log(pessoa.apresentar())

//classe
//obs classe sempre com letra maiúscula

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

const meuC3Lindo = new Carro("Citroën", "C3", 1900);

console.log(meuC3Lindo)

//exercicios feitos pela profa aqui
// let numero: number = 10;
// console.log(numero)

// let nome: string = "Fulano";
// console.log(nome)

// const pi: number =  3.14;
// console.log(pi)

// function saudacao(nome:string, idade: number){
//  return console.log(`Olá ${nome} e tenho ${idade} anos`);
// }
// const FulanoName = "Fulano";
// saudacao(FulanoName, 26)

// const saudacaoArrowFunction = (nome:string, idade: number) => console.log(`Olá ${nome} e tenho ${idade} anos`);
// const CiclanoName = "Ciclano";
// const age = 30;
// saudacaoArrowFunction(CiclanoName, age)

//OBJETO com função dentro ultilizando "this"
// const pessoa = {
//     nome: "Fulano",
//     idade: 30,
//     cidade: "Floripa",
//     apresentar: function():string {
//         return `Olá ${this.nome} e tenho ${this.idade} anos e sou da cidade de ${this.cidade}`
//     }
// }
// console.log(pessoa.apresentar())
// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa.cidade)


//CLASSE
class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const meuCarro = new Carro("Ford", "Mustang", 2024)
console.log(meuCarro)
// let numero:number = 5;

// console.log(numero); // 10

// let nome:string = "Mayara";

// console.log(nome); // Mayara

// const pi:number = 3.14;

// console.log(pi); // 3.14

// function saudacao(nome:string) {
//  console.log(`Olá, me chamo  ${nome} e tenho ${idade} anos.`);
// }
// const nomeUsuario = "Mayara";
// const idade:number = 25;
// saudacao(nomeUsuario); 


//OBJETO
// const pessoa ={
//     nome: "Mayara",
//     idade: 25,
//     cidade: "São Paulo",
//     apresentar: function():string{
//         return `Olá, me chamo ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}.`;
//     }
// }
// console.log(pessoa.apresentar()); // Olá, me chamo Mayara, tenho 25 anos e moro em São Paulo.

//CLASSE

class Carro {
    marca:string;
    modelo:string;
    ano:number;

    constructor(marca:string, modelo:string, ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const meuCarro = new Carro("Chevrolet", "Onix", 2020);
console.log(meuCarro); 
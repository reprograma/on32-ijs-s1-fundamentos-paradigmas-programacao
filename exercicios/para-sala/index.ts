//exercicios feitos pela profa aqui
// let numero: number = 10;
// console.log(numero);

// let nome:string = "Fernanda";
// console.log(nome);

// const pi:number = 3.14;
// console.log(pi);

// function saudacao(nome:string){
//     console.log(`Olá ${nome}`)
// }

// const nomeUsuario:string = "Fernanda"
// saudacao(nomeUsuario)

//OBJETO
const pessoa = {
    nome: "Alice",
    idade: 20,
    cidade: "Natal",
    apresentar: function():string{
        return `Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos, e moro na cidade de ${this.cidade}`
    }
}
console.log(pessoa.apresentar());

//CLASSE
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

const meuCarro = new Carro("HB20", "2.0", 2018)
console.log(meuCarro)
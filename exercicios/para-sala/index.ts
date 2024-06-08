//exercicios feitos pela profa aqui


// VARIÁVEIS
let num: number = 10;
console.log(num);

let nome:string = "Ewelyn";
console.log(nome);

const pi:number = 3.1415;
console.log(pi);

// FUNÇÃO
function saudacao(nome:string){
    console.log(`Olá, ${nome}`);
}

saudacao(nome);

// OBJETO
const pessoa = {
    nome: "Ewelyn",
    idade: 31,
    cidade: "Recife",
    apresentar: function (): string { 
        return `Olá, meu nome é ${this.nome}, eu tenho ${this.idade} e sou da cidade de ${this.cidade}`
    }
}

console.log(pessoa.apresentar());

// CLASSE
class Car{
    marca:string;
    modelo:string;
    ano:number;

    constructor(marca:string, modelo:string, ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const meuCarro = new Car("Toyota", "Corolaa", 2024);
console.log(meuCarro);

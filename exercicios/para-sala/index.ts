let numero:number = 10;
console.log(numero);

let nome:string = "Mariana";
console.log(nome);

const pi:number = 3.14;
console.log(pi);

function saudacao(nome:string) {
    console.log(`olá ${nome}`);
}

const nomeUsuario:string = "Mari"
saudacao(nomeUsuario);

// objeto
const pessoa = {
    nome: "Coraline",
    idade: 15,
    cidade: "Ashland",
    apresentar: function():string {
        return `Olá meu nome é ${this.nome} e eu tenho ${this.idade} anos, e eu sou da cidade ${this.cidade}`
    }
}

console.log(pessoa.apresentar());

// classe

class Carro {
    marca:string
    modelo:string
    ano:number

    constructor(marca:string, modelo:string, ano:number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const meuCarro = new Carro("Toyota", "Corola", 2024);
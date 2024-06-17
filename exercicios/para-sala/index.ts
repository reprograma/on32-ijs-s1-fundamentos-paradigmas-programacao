//exercicios feitos pela profa aqui

let numero:number = 10;
console.log(numero);

let nome:string ="Maila"
console.log(nome);

const pi:number = 3.14;
console.log(pi);

function saudacao(nome:string, idade:number){
    console.log(`Olá , sou a ${nome} e tenho ${idade}`);
}
const nomeUsuario:string = "Maila";
const idade:number = 34;
saudacao(nomeUsuario, idade)


//OBJETO
const pessoa = {
    nome: "Maila",
    idade: 34,
    cidade: "São Paulo",
    apresentar: function():string {
        return `Olá meu nome é ${this.nome}, eu tenho ${idade} e sou da cidade de ${this.cidade}`
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

const meuCarro = new Carro("Toyota", "Corolla", 2024);
console.log(meuCarro)
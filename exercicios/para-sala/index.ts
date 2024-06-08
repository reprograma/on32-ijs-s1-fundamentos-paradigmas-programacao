let numero:number = 10;

console.log(numero)

let nome:string = "lucia";
console.log(nome)

const pi:number = 3.14;
console.log(pi)

//Função
function saudacao (nome:string, idade:number) {
    console.log (`Olá eu me chamo ${nome} e tenho ${idade} anos.`);    
}

const nomeUsuario:string = "Lucia"
const idadeUsuario:number = 30;

saudacao(nomeUsuario, idadeUsuario)

//Objeto
const pessoa = {
    nome:"Alice",
    idade:15,
    cidade:"salvador",
    apresentar: function ():string {
        return `Olá meu nome é ${this.nome}, eu tenho ${this.idade} anos e moro na cidade de ${this.cidade}`      
    }
}

console.log(pessoa.apresentar())

//Classe

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





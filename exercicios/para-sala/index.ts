// let numero:number = 10;

// console.log(numero);

// let nome:string = 'keila';
// console.log(nome);

// let boolean1:boolean = true;
// console.log(boolean1);

// let boolean2:boolean = false;

// // Variáveis imutáveis

// const pi:number = 3.14;
// console.log(pi);

// FUNÇÃO NO TYPESCRIPT
function saudacao(nome:string) {
    console.log( `Olá ${nome}`);
}

const nomeUsuario = "Keila";

saudacao(nomeUsuario);

//OBJETO DENTRO DO TYPESCRIPT

const pessoa = {
    nome: "Alice",
    idade: 15,
    cidade: "Salvador",
    apresentar: function():string {
        return(`Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos e sou da cidade de ${this.cidade}`);
    }
}
console.log(pessoa.apresentar());




// CLASSES NO TYPESCRIPT

class Carros {	
  marca: string;
  modelo: string;
  ano: number;	

  constructor(marca:string, modelo:string, ano:number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

const carro1 = new Carros("Toyota", "Corrola", 2024);

console.log(carro1);




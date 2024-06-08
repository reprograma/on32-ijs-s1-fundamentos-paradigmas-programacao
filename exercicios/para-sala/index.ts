//exercicios feitos pela profa aqui
const numero: number = 1;
const nome: string = "Thalya";
const pi: number = 3.14;

function saudacao(nome: string, idade: number) {
  return `Olá, ${nome} e tenho ${idade} anos.`;
}

const pessoa = {
  nome: "Thalya",
  idade: 26,
  cidade: "Rio de Janeiro",
  apresentar: function (): string {
    return `Olá meu nome é ${this.nome}, eu tenho ${this.idade} e sou da cidade do ${this.cidade}`;
  },
};

export class Carro {
  marca: string;
  modelo: string;
  ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

const carro = new Carro("Toyota", "Corola", 2015);

console.log(
  { numero, nome, saudacao: saudacao(nome, 26), carro, pi },
  pessoa.apresentar()
);

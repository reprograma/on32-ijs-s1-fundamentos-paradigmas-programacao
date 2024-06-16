const numero: number = 1
const nome: string = "Lzzy Hale"
const pi: number = 3.14

function saudacao(nome: string, idade: number) {
  return `Olá, sou ${nome} e tenho ${idade} anos.`
}

const pessoa = {
  nome: "Lzzy Hale",
  idade: 40,
  cidade: "Red Lion",
  apresentar: function (): string {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} e sou da cidade do ${this.cidade}`
  },
};

export class Carro {
  marca: string
  modelo: string
  ano: number

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
  }
}

const carro = new Carro("Honda", "Civic", 2018)

console.log(
  { numero, nome, saudacao: saudacao(nome, 40), carro, pi },
  pessoa.apresentar()
)

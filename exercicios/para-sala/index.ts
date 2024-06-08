//function

function saudacao(nome: string) {
 console.log(`ola, ${nome}`)
}

const nomeUsuario: string = 'victoria'

saudacao(nomeUsuario);

// object

const pessoa = {
 nome: 'victoria',
 idade: 20,
 cidade: 'sp',
 apresentar: function (): string {
  return `Ola meu nome é ${this.nome}, eu tenho ${this.idade} anos e sou de ${this.cidade}`
 }
}

console.log(pessoa.apresentar())

// class

class Car {
 marca: string;
 modelo: string;
 ano: number;

 constructor(marca: string, modelo: string, ano: number) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
 }

}

const myCar = new Car("nissan", 'kicks', 2023);
console.log(myCar)
import { Animal } from './animal';

class Gato implements Animal {
  nome:string;
  idade:number;
  cor:string;

  constructor(nome:string, idade:number, cor:string){
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
  }

  som():void{
    console.log("O gato faz: Miau");
  }
}

const garfield = new Gato("Garfield", 5, "Laranja");
console.log(garfield.som());

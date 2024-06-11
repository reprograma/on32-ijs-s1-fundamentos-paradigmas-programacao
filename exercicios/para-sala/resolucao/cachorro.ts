import { Animal } from './animal';

class Cachorro implements Animal{
  nome:string;
  idade:number;
  raca:string;

  constructor(nome:string, idade:number, raca:string){
    this.nome = nome;
    this.idade = idade;
    this.raca = raca;
  }

  som():void{
    console.log("O cachorro faz: Au Au");
  }
}

const scooby = new Cachorro("Scooby Doo", 7, "Dogue Alemão");
console.log(scooby.som());
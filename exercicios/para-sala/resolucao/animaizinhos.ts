// nome:string;
//     idade:number;
//     som():void;

import { Animal } from "./animais";

class Cachorro implements Animal{
    nome: string;
    idade: number;
    raca:string

    constructor(nome:string,idade:number,raca:string){
        this.nome= nome
        this.idade = idade
        this.raca = raca
    }
    som():void{
        console.log("o cachorro faz au au!");
    }
}

class Gato implements Animal{

    nome: string;
    idade: number;
    cor:string;

    constructor(nome:string,idade:number,cor:string){
        this.nome= nome
        this.idade = idade
        this.cor = cor
    }
    som():void{
        console.log("o Gato faz miau!");
    }

}

const caozinho = new Cachorro("rex",3,"labrador")
console.log(`nome: ${caozinho.nome}`)
console.log(`idade: ${caozinho.idade}`)
console.log(`raça: ${caozinho.raca}`)
caozinho.som()

const gatinho = new Gato("paçoca",1,"preto")
console.log(`nome: ${gatinho.nome}`)
console.log(`idade: ${gatinho.idade}`)
console.log(`cor: ${gatinho.cor}`)
gatinho.som()
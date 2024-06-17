import { Animal } from "./animal"

class Cachorro implements Animal {
    nome:string;
    idade:number;
    raca:string;

    constructor(nome:string, idade:number, raca:string){
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    som():void{
        console.log("O cahorro faz: Au Au");
    }
}

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
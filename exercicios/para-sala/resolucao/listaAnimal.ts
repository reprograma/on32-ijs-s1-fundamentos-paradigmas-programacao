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

const meuCachorro = new Cachorro ("Rex", 3, "Labrador");
console.log(`Nome: ${meuCachorro.nome}`)
console.log(`Idade: ${meuCachorro.idade}`)
console.log(`Raca: ${meuCachorro.raca}`)
meuCachorro.som()

const meuGato = new Gato("Paçoca",1,"preto")
console.log(`Nome: ${meuGato.nome}`)
console.log(`Idade: ${meuGato.idade}`)
console.log(`Cor: ${meuGato.cor}`)
meuGato.som()

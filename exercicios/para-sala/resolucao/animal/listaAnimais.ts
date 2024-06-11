import {Animal} from "./animal";

class Cachorro implements Animal {
    nome: string;
    idade: number;
    raca: string;

    constructor(nome:string, idade:number, raca:string) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    //metodo
    som():void {
        console.log("AU AU")
    }
}

class Gato implements Animal {
    nome: string;
    idade: number;
    cor: string;

    constructor(nome:string, idade:number, cor:string) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }

    //metodo
    som():void {
        console.log("MIAU MIAU")
    }
}

//instaciar classes
const meuCachorro = new Cachorro ("Sirius", 5 , "Pastor Alemão")
console.log(`Nome: ${meuCachorro.nome}`)
console.log(`Idade: ${meuCachorro.idade}`)
console.log(`Raça: ${meuCachorro.raca}`)
meuCachorro.som()
console.log()
const meuGato = new Gato("Fred", 2 , "Caramelo")
console.log(`Nome: ${meuGato.nome}`)
console.log(`Idade: ${meuGato.idade}`)
console.log(`Cor: ${meuGato.cor}`)
meuGato.som()
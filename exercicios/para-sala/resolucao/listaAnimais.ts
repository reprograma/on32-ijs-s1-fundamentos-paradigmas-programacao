import { Animal } from "./animal";

class Cachorro implements Animal {
    nome:string;
    idade: number;
    raca: string;

    constructor(nome:string, idade:number, raca:string) {
        this.nome = nome,
        this.idade = idade,
        this.raca = raca
    }

    som():void {
        console.log("O cachorro faz: Au au")
    }
}

class Gato implements Animal {
    nome:string;
    idade: number;
    cor: string;

    constructor(nome:string, idade:number, cor:string) {
        this.nome = nome,
        this.idade = idade,
        this.cor = cor
    }

    som():void {
        console.log("O gato faz: Miau")
    }
}

const novoCachorro = new Cachorro('Tony', 2, 'Bulldog')
console.log(novoCachorro.som())

const novoGato = new Gato('Lua', 4, 'Branca')
console.log(novoGato.som())
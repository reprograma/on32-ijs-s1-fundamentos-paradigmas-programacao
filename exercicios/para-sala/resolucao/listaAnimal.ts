import { Animal } from "./animal"

class Cachorro implements Animal {
    nome: string;
    idade: number;
    raca: string

    constructor (nome: string, idade: number, raca: string){
        this.nome = nome,
        this.idade = idade,
        this.raca = raca
    }

    som(): void {
        console.log(`O dog ${this.nome} faz au au`);
    }
}

class Gato implements Animal {
    nome: string;
    idade: number;
    cor: string

    constructor(nome: string, idade: number, cor: string) {
        this.nome = nome,
        this.idade = idade,
        this.cor = cor
    }

    som(): void {
        console.log(`O gatinho ${this.nome} faz miauu`);
    }
}

class Vaca implements Animal {
    nome: string;
    idade: number;
    cor: string

    constructor(nome:string, idade:number, cor:string){
        this.nome = nome,
        this.idade = idade,
        this.cor = cor
    }
    som(): void {
        console.log(`A vaquinha ${this.nome} faz muu`)
    }
}

const meuCachorro = new Cachorro ("Beto", 2, "cachorro salsicha");
console.log(`Nome: ${meuCachorro.nome}, idade: ${meuCachorro.idade}, raça ${meuCachorro.raca}`);
meuCachorro.som()

const meuGato = new Gato("Domingo", 1, "cinza");
console.log(`Nome: ${meuGato.nome}, idade: ${meuGato.idade}, cor ${meuGato.cor}`);
meuGato.som()

const minhaVaca = new Vaca("Mimosa", 3, "marrom");
console.log(`Nome: ${minhaVaca.nome}, idade:${minhaVaca.idade}, cor ${minhaVaca.cor}`);
minhaVaca.som()
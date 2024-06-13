import { Animal } from "./animal";

class Cachorro implements Animal {
    nome: string;
    idade: number;
    raca: string;

    constructor(nome: string, idade: number, raca: string) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    som(): void {
        console.log("O cachorro faz: Au Au")
    }
}

class Gato implements Animal {
    nome: string;
    idade: number;
    cor: string;

    constructor(nome: string, idade: number, cor: string) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }
    som(): void {
        console.log("O gato faz: Miau")
    }
}

const meuCachorro = new Cachorro("John", 12, "Vira-Lata");
console.log(`Nome: ${meuCachorro.nome}`)
console.log(`Idade: ${meuCachorro.idade}`)
console.log(`Raça: ${meuCachorro.raca}`)
meuCachorro.som()

const meuGato = new Gato("Nico", 2, "preto")
console.log(`Nome: ${meuGato.nome}`)
console.log(`Idade: ${meuGato.idade}`)
console.log(`Cor: ${meuGato.cor}`)
meuGato.som()
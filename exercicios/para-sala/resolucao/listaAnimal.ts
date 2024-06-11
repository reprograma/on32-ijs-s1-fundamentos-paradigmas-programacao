import { Animal } from "./animal"; 
 
 
 export class Cachorro implements Animal {
    nome: string;
    idade: number;
    raca: string;
    constructor(nome: string, idade: number, raca: string) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }
    som(): void {
        console.log("O cachorro faz: Au Au");
    }
}

export class Gato implements Animal {
    nome: string;
    idade: number;
    cor: string;
    constructor(nome: string, idade: number, cor: string) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }
    som(): void {
        console.log("O gato faz: Miau");
    }
}

const meuCachorro = new Cachorro("Rex", 3, "Vira-lata");
console.log(`Nome: ${meuCachorro.nome}, Idade: ${meuCachorro.idade}, Raça: ${meuCachorro.raca}`);
meuCachorro.som();

const meuGato = new Gato("Darwin", 2, "Branco-Marrom");  
console.log(`Nome: ${meuGato.nome}, Idade: ${meuGato.idade}, Cor: ${meuGato.cor}`); 
meuGato.som();
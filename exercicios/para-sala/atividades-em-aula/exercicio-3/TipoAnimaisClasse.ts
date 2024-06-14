import { animal } from "./animalInterface";


class Cahorro implements animal {
    nome: string;
    idade: number;
    raca: string;
    constructor(nome: string, idade: number, raca: string) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }
    som():void{
        console.log("O cachorro faz: Au Au")
    }
}

class Gato implements animal {
    nome: string;
    idade: number;
    cor: string;
    constructor(nome: string, idade: number, cor: string) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }
    som():void{
        console.log("O gato faz: miau")
    }
}

const meuCachorro = new Cahorro("Billy", 3, "Vira-lata")
console.log(`Nome: ${meuCachorro.nome}`);
console.log(`Idade: ${meuCachorro.idade}`);
console.log(`Idade: ${meuCachorro.raca}`);
meuCachorro.som()

const meuGato = new Gato("Piquitito", 6, "preto")
console.log(`Nome: ${meuGato.nome}`);
console.log(`Idade: ${meuGato.idade}`);
console.log(`Cor: ${meuGato.cor}`);
meuGato.som()
import {Animal} from "./animal";

class Gato implements Animal{
    nome: string;
    idade: number;
    cor: string;

    constructor(nome: string, idade: number,cor: string) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }
    som(): void {
        console.log(`O gato faz: Miau`);
    }

}

const meuGato = new Gato("Filó",3,"colorida")
console.log(`Nome: ${meuGato.nome}`);
console.log(`Idade: ${meuGato.idade}`);
console.log(`Cor: ${meuGato.cor}`);
meuGato.som();

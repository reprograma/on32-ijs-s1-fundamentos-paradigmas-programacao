import { Animal } from "./animal";

export class Gato implements Animal {
    nome: string;
    idade: number;
    cor: string;

    constructor(nome: string, idade: number, cor: string){
        this.nome = nome
        this.idade = idade
        this.cor = cor
    }
    som(): void {
        console.log("O gato faz: Miau")
    }

}
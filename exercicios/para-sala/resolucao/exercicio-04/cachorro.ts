import { Animal } from "./animal";

export class Cachorro implements Animal {
    nome: string;
    idade: number;
    raca: string;

    constructor(nome: string, idade: number, raca: string){
        this.nome = nome
        this.idade = idade
        this.raca = raca
    }
    som(): void {
        console.log("O cachorro faz: Au Au")
    }
}

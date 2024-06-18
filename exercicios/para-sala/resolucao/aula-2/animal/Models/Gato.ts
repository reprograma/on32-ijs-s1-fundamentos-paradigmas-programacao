import Animal from "../IAnimal";

export default class Gato implements Animal {
    nome: string;
    idade: number;
    cor: string;

    constructor(nome:string, idade:number, cor: string){
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }

    emitirSom(): void {
        console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmiau mhraw')
    }
}
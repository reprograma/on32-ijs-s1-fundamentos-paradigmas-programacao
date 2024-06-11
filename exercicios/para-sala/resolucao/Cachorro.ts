import {Animal} from "./animal";

class Cachorro implements Animal{
    idade: number;
    nome: string;
    raca: string;

    constructor(idade: number, nome: string, raca: string){
                this.idade = idade;
                this.nome = nome;
                this.raca = raca;
    }

    som(): void {
        console.log(`O cachorro faz: Au Au`);
    }

}
const meuCachorro = new Cachorro(8,"gustrove","Dachshund");
console.log(`Nome: ${meuCachorro.nome}`);
console.log(`Idade: ${meuCachorro.idade}`);
console.log(`Raça: ${meuCachorro.raca}`);
meuCachorro.som();

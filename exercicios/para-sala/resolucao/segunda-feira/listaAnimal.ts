import { animal } from "./animal";

class Cachorro implements animal {
    nome:string;
    idade:number;
    raca:string;

    constructor (nome:string, idade:number, raca:string){
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    som():void {
        console.log("O cachorro faz: au au!")
    }
}

class Gato implements animal {
    nome:string;
    idade:number;
    cor:string;

    constructor(nome:string, idade: number, cor: string) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }
    som():void {
        console.log("O cachorro faz: miau!")
    }
}

const meuCachorro = new Cachorro ("Lana", 4, "Vira-lata");
console.log(`Nome: ${meuCachorro.nome}
Idade: ${meuCachorro.idade}
Raça: ${meuCachorro.raca}` 
)
meuCachorro.som()


const meuGato = new Gato ("Simba", 6, "Cinza");
console.log(`Nome: ${meuGato.nome}
Idade: ${meuGato.idade}
Cor: ${meuGato.cor}` 
)
meuGato.som()


import Animal from "../IAnimal";

export default class Cachorro implements Animal {
    nome:string;
    idade:number;
    raca:string;

    constructor(nome:string, idade:number, raca: string){
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    emitirSom():void {
        console.log('auau auauauaua auauauaua auauauauauaua aua uau au au sniff au au au')
    }
}
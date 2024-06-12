"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cachorro {
    constructor(nome, idade, raca) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }
    som() {
        console.log("O cahorro faz: Au Au");
    }
}
class Gato {
    constructor(nome, idade, cor) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }
    som() {
        console.log("O gato faz: Miau");
    }
}
const meuCachorro = new Cachorro("Rex", 3, "Labrador");
console.log(`Nome: ${meuCachorro.nome}`);
console.log(`Idade: ${meuCachorro.idade}`);
console.log(`Raca: ${meuCachorro.raca}`);
meuCachorro.som();
const meuGato = new Gato("Paçoca", 1, "preto");
console.log(`Nome: ${meuGato.nome}`);
console.log(`Idade: ${meuGato.idade}`);
console.log(`Cor: ${meuGato.cor}`);
meuGato.som();
//# sourceMappingURL=listaAnimal.js.map
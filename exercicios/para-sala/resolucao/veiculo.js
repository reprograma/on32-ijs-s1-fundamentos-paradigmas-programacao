"use strict";
class Automovel {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirInformacoes() {
        return `Marca${this.marca}, Modelo:${this.modelo}, Ano${this.ano}`;
    }
}
const myCarro = new Automovel("toyota", "Corolla", 2024);
console.log(myCarro.exibirInformacoes());
//# sourceMappingURL=veiculo.js.map
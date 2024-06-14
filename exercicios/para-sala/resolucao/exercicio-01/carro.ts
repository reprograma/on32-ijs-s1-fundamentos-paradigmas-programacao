import { Veiculo } from "./veiculo";

class Carro implements Veiculo {
    marca: string
    modelo: string
    ano: number

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    exibirInformacoes(): string {
        return `"Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}".`
    }
}

const vwTCross = new Carro("VW", "TCROSS", 2024)

console.log(vwTCross.exibirInformacoes())
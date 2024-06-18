import Veiculo from "./models/interface/veiculo";

export default class Carro implements Veiculo {

    constructor(public marca:string, public modelo:string, public ano:number){ }

    exibirInformacoes(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}

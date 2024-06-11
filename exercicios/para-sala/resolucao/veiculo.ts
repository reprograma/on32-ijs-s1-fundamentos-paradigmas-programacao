interface Veiculo{
    marca:string;
    modelo:string;
    ano:number;
    exibirInformacao():string
}

class Automovel implements Veiculo{
    marca: string;
    modelo: string;
    ano: number;
    constructor(marca:string, modelo:string, ano:number){
        this.marca = marca
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirInformacao(): string {
        return `marca:${this.marca}, modelo:${this.modelo}, ano:${this.ano}`
    }
}
const meuCarro = new Automovel("toyota", "corolla", 2013)
console.log(meuCarro.exibirInformacao())
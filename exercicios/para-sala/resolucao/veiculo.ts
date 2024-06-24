interface Veiculo {
    marca:string;
    modelo:string;
    ano:number;
    exibirInformacoes():string;
}
// geralmente a interface é criada em um arquivo separado
// a necessidade de criar interfaces é pra estabelecer o que as classes devem ter

class Automovel implements Veiculo {
    marca:string;
    modelo:string;
    ano:number;

    constructor(marca:string, modelo:string, ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano
    }

    // função
    exibirInformacoes():string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`
    }

}
// criação de objeto
const myCarro = new Automovel("toyota", "Corolla", 2024)
console.log(myCarro.exibirInformacoes())

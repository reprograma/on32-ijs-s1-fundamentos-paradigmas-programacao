//CLASSE
interface Veiculo {
    marca:string;
    modelo:string;
    ano:number
    exibirInformacoes():string
}

class Automovel implements Veiculo{
    marca:string;
    modelo:string;
    ano:number
    constructor(marca:string, modelo:string, ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }   
    exibirInformacoes(): string {
        return `${this.marca}, Modelo: ${this.modelo}, Ano ${this.ano}`
    }
        
    }


const meuVeiculo = new Automovel("Toyota", "5.0", 2041)
console.log(meuVeiculo.exibirInformacoes())
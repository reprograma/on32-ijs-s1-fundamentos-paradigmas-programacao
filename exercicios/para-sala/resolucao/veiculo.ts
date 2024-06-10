interface Veiculo {
    marca:string;
    modelo:string;
    ano:number;
    exibirInformacoes():string
}

class Carro2 implements Veiculo {
    marca:string;
    modelo:string;
    ano:number;
    
    constructor(marca:string, modelo:string, ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInformacoes(): string {
        return `Marca:${this.marca}, Modelo:${this.modelo}, Ano:${this.ano}`
    }
 
}

const MyCar = new Carro2("Toyota", "Corolla", 2024)
console.log(MyCar.exibirInformacoes())

console.log(Date())
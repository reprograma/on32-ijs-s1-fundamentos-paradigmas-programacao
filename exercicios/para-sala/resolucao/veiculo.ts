interface Veiculo {
    marca:string;
    modelo:string;
    ano:number;
    exibirInformacoes():string
}

class Automovel implements Veiculo {
    marca:string;
    modelo:string;
    ano:number;

    constructor(marca:string, modelo:string, ano:number) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
exibirInformacoes(): string {
    return `Marca:${this.marca}, Modelo:${this.modelo}, Ano:${this.ano}`
}
}

// após função pronta irei instanciar a classe

const myCar = new Automovel("Toytota", "Corolla", 2024)
console.log(myCar.exibirInformacoes()) // não esquecer de inserir () quando puxo uma função
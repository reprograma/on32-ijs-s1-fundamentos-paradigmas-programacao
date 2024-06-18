interface Veiculo {
    marca: string;
    modelo: string;
    ano: number;
    exibirInformacoes(): string;
}

class Carros implements Veiculo {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInformacoes(): string {
        return `Olá, aqui estão as informações do carro selecionado: Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}

// Exemplo de uso
const meuCarro = new Carros('Toyota', 'Corolla', 2021);
console.log(meuCarro.exibirInformacoes());

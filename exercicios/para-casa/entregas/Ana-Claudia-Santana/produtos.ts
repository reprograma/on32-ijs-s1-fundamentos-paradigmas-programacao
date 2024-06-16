import { ProdutoEcologico } from "./interfaces/produtos.interfaces";

class AlimentoOrganico implements ProdutoEcologico{
    nome: string
    preco: number
    dataValidade: Date 
    ingredientes: string [] = []

    constructor(nome: string, preco: number, dataValidade: Date, ingredientes: string[]) {
        this.nome = nome
        this.preco = preco
        this.dataValidade = dataValidade 
        this.ingredientes = ingredientes 
    }
    exibirInfo(): void {
        console.log(`Nome: ${this.nome}, Preço: R$${this.preco}, Validade: ${this.dataValidade.toDateString()}, Ingredientes: ${this.ingredientes.join(',')}`);
      }
    }


class ProdutoLimpezaBiodegradavel implements ProdutoEcologico{
    nome: string
    preco: number
    volume: number

    constructor(nome: string, preco: number, volume: number) {
        this.nome = nome
        this.preco = preco
        this.volume = volume
    }
     
    exibirInfo(): void {
        console.log(`Nome: ${this.nome}, Preço: R$${this.preco}, Volume: ${this.volume} `);
      }

}

class ItemDecoracaoSustentavel implements ProdutoEcologico{
    nome: string
    preco: number
    material: string
    dimensoes: {
     largura: number;
     altura: number;
     profundidade: number
    }

    constructor(
        nome: string, 
        preco: number, 
        material: string,
        dimensoes:{
            largura: number, 
            altura: number, 
            profundidade: number}) {

        this.nome = nome
        this.preco = preco
        this.material = material
        this.dimensoes = dimensoes
    }

    exibirInfo(): void {
        console.log(`Nome: ${this.nome}, Preço: R$${this.preco}, Material: ${this.material}, Dimensões: Largura ${this.dimensoes.largura} x Altura ${this.dimensoes.altura} x Profundidade ${this.dimensoes.profundidade}`);
      }
}

const alimentoOrganico = new AlimentoOrganico("Aveia", 20, new Date (2021,11,1), ["Amido","Água"])

alimentoOrganico.exibirInfo();

const produtoLimpezaBiodegradavel = new ProdutoLimpezaBiodegradavel("Esponja Ecologica", 55.90, 10)

produtoLimpezaBiodegradavel.exibirInfo()

const itemDecoracaoSustentavel = new ItemDecoracaoSustentavel("Mesa de Madeira", 350.75, "Madeira", {largura: 120, altura: 75, profundidade: 60})

itemDecoracaoSustentavel.exibirInfo()
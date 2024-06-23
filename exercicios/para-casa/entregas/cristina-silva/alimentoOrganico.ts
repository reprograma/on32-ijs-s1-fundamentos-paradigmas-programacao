import { ProdutoEcologico } from "./produtoEcologico.";

class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataDeValidade: Date;
    ingredientes:string[];

    constructor(nome:string, preco:number, dataDeValidade:Date, ingredientes:string[]){
        this.nome = nome;
        this.preco = preco;
        this.dataDeValidade = dataDeValidade;
        this.ingredientes = ingredientes;
    }

    exibirAlimento(): string {
        return `Nome: ${this.nome}, Preço:${this.preco}, Data de Validade:${this.dataDeValidade.toDateString()}, Ingredientes:${this.ingredientes}`
    }
}

const listarAlimento = new AlimentoOrganico('Molho de Tomate',10.89, new Date(2024, 11, 29), ['tomate', 'sal', 'orégano'])
console.log(listarAlimento.exibirAlimento())
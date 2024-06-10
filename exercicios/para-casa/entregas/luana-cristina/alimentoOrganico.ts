import { ProdutoEcologico } from "./produtoEcologico";
class AlimentoOrganico implements ProdutoEcologico{
    nome:string;
    preco:number;

    dataValidade: Date = new Date();
    ingredientes:string[] = []

    constructor(nome:string, preco:number,ingredientes:string[]){
        this.nome = nome;
        this.preco = preco;
        this.ingredientes = ingredientes;
    }
    exibirInformacoes(): string {
        return `Nome:${this.nome}, Preco:${this.preco}, Data:${this.dataValidade.getFullYear()}, Ingredientes:${this.ingredientes}}`
    }
}

const teste = new AlimentoOrganico("teste", 50, ["açucar", "limao"])
console.log(teste.exibirInformacoes())
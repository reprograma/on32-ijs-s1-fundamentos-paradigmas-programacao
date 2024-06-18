import { ProdutoEcologico } from "../IProdutoEcologico";


export default class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string[];


    constructor(nome:string, preco:number, dataValidade: Date, ingredientes: string[]){
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
        console.log(`Produto ${this.nome} adicionado com sucesso!`)
    }

    exibirInformacoes(): void {
        console.log(`Alimento Orgânico - Nome: ${this.nome}, Preço: ${this.preco}, Data de Validade: ${this.dataValidade.toLocaleDateString('pt-BR')}`)
         
    }
}

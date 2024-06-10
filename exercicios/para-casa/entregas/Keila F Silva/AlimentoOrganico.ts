import { ProdutoEcologico } from "./ProdutoEcologico";


export class AlimentoOrganico implements ProdutoEcologico {
  nome: string;
  preco: number;
  ingredientes: string[];
  dataValidade: Date;
  
  constructor(nome: string, preco: number, ingredientes: string[], dataValidade: Date) {
    this.nome = nome;
    this.preco = preco;
    this.ingredientes = ingredientes;
    this.dataValidade = dataValidade;

  }
  exibirInformacoes(): string {
    return `Nome: ${this.nome}, Preço: ${this.preco}, Ingredientes: ${this.ingredientes}, Data de Validade: ${this.dataValidade}`;
  }

 
}
import { IProdutoEcologico } from "../interfaces";

export class AlimentoOrganico implements IProdutoEcologico {
  nome: string;
  preco: number;
  dataValidade: Date;
  ingredientes: string[];

  constructor(
    nome: string,
    preco: number,
    dataValidade: Date,
    ingredientes: string[]
  ) {
    this.nome = nome;
    this.preco = preco;
    this.dataValidade = dataValidade;
    this.ingredientes = ingredientes;
  }

  exibirInformacoes(): string {
    return `
      Nome: ${this.nome}  
      Preço: R$ ${this.preco}  
      Validade: ${Intl.DateTimeFormat("pt-BR").format(this.dataValidade)}  
      Ingredientes: ${this.ingredientes}
    `;
  }
}

const ingredientesPaoIntegral = [
  "Farinha de trigo integral orgânica",
  "água",
  "fermento orgânico",
  "sal marinho",
  "mel orgânico",
];

const paoIntegral = new AlimentoOrganico(
  "Pão Integral Orgânico",
  10,
  new Date("2025-03-20"),
  ingredientesPaoIntegral
);

console.log(paoIntegral.exibirInformacoes());

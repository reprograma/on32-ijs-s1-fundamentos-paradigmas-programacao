import { ProdutoEcologico } from "./produtoEcologico";

export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
  nome: string;
  preco: number;
  volume: number;

  constructor(nome: string, preco: number, volume: number) {
    this.nome = nome;
    this.preco = preco;
    this.volume = volume;
  }

  exibirInformacoes(): string {
    return `Nome: ${this.nome},\nPreço: R$${this.preco.toFixed(2)},\nVolume: ${this.volume}ml\n`;
  }
}


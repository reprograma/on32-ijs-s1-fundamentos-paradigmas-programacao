import { IProdutoEcologico } from "../interfaces";

export class ProdutoLimpezaBiodegradavel implements IProdutoEcologico {
  nome: string;
  preco: number;
  volume: number;

  constructor(nome: string, preco: number, volume: number) {
    this.nome = nome;
    this.preco = preco;
    this.volume = volume;
  }

  exibirInformacoes(): string {
    return `
      Nome: ${this.nome}  
      Preço: R$ ${this.preco}  
      Volume: ${this.volume}  
    `;
  }
}

const lustraMovel = new ProdutoLimpezaBiodegradavel(
  "Lustra-móveis BioShine",
  100,
  500
);

console.log(lustraMovel.exibirInformacoes());

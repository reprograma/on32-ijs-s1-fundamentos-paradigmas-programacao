import { ProdutoEcologico } from "./produtoEcologico";

export class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    material: string;	            
    dimensoes: { 
      largura: number;  
      altura: number;  
      profundidade: number;
  };
  constructor(nome: string, preco: number, material: string, dimensoes: { largura: number; altura: number; profundidade: number; }) {
    this.nome = nome;
    this.preco = preco;
    this.material = material;
    this.dimensoes = dimensoes;
  }
  
    exibirInformacoes(): string {
      return `Nome: ${this.nome},\nPreço: R$${this.preco.toFixed(2)},\nMaterial: ${this.material},\nDimensões: ${this.dimensoes.largura}x${this.dimensoes.altura}x${this.dimensoes.profundidade}\n`;
    }
}


import { ProdutoEcologico } from "./produtoEcologico";

export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number; // em ml
  
    constructor(nome: string, preco: number, volume: number) {
      this.nome = nome;
      this.preco = preco;
      this.volume = volume;
    }
  
    mostrarDetalhes() {
      console.log(`Nome: ${this.nome}, Preço: ${this.preco}, Volume: ${this.volume}ml`);
    }
  }
  
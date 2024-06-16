import { ProdutoEcologico } from "../interfaces/produtoEscologico.interface"

export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string
    preco: number
    volume: number
  
    constructor(nome: string, preco: number, volume: number) {
      this.nome = nome
      this.preco = preco
      this.volume = volume
    }
  
    detalhes(): string {
      return `Nome: ${this.nome}, Preço: ${this.preco}, Volume: ${this.volume}ml`
    }
  }
  
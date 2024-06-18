//**AlimentoOrganico**, **ProdutoLimpezaBiodegradavel** e ItemDecoracaoSustentavel são classes que implementam a interface ProdutoEcologico, cada uma representando um tipo específico de produto ecológico.
// Cada classe possui suas próprias propriedades específicas, como volume para **ProdutoLimpezaBiodegradavel**

import { ProdutoEcologico } from "../interfaces/produtoEcologico.interface"

export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string
    preco: number
    volume: number
  
    constructor(nome: string, preco: number, volume: number) {
      this.nome = nome
      this.preco = preco
      this.volume = volume
    }
  
    exibirDetalhes(): string {
      return `Nome: ${this.nome}, Preço: ${this.preco}, Volume: ${this.volume}ml`
    }
  }
  
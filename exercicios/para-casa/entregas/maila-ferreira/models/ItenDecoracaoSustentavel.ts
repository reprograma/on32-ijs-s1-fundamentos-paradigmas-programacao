//**AlimentoOrganico**, **ProdutoLimpezaBiodegradavel** e ItemDecoracaoSustentavel são classes que implementam a interface ProdutoEcologico, cada uma representando um tipo específico de produto ecológico.
//Cada classe possui suas próprias propriedades específicas, como material e dimensões para **ItemDecoracaoSustentavel**.

import { ProdutoEcologico } from "../interfaces/produtoEcologico.interface"
import { Dimensoes } from "../interfaces/dimensoes.interface"
  
export class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string
    preco: number
    material: string
    dimensoes: Dimensoes
  
    constructor(nome: string, preco: number, material: string, dimensoes: Dimensoes) {
      this.nome = nome
      this.preco = preco
      this.material = material
      this.dimensoes = dimensoes
    }
  
    exibirDetalhes(): string {
      return `Nome: ${this.nome}, Preço: ${this.preco}, Material: ${this.material}, Dimensões: ${this.dimensoes.largura}x${this.dimensoes.altura}x${this.dimensoes.profundidade}cm`
    }
  }
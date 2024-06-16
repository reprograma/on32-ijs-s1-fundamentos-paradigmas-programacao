import { ProdutoEcologico } from "../interfaces/produtoEscologico.interface"
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
  
    detalhes(): string {
      return `Nome: ${this.nome}, Preço: ${this.preco}, Material: ${this.material}, Dimensões: ${this.dimensoes.largura}x${this.dimensoes.altura}x${this.dimensoes.profundidade}cm`
    }
  }
  
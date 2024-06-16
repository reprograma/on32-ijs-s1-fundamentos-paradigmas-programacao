import { ProdutoEcologico } from "../interfaces/produtoEscologico.interface"

export class AlimentoOrganico implements ProdutoEcologico {
    nome: string
    preco: number
    dataValidade: Date
    ingredientes: string[]
  
    constructor(nome: string, preco: number, dataValidade: Date, ingredientes: string[]) {
      this.nome = nome
      this.preco = preco
      this.dataValidade = dataValidade
      this.ingredientes = ingredientes
    }
  
   
    detalhes(): string {
      return `Nome: ${this.nome}\n` +
             `Preço: R$ ${this.preco.toFixed(2)}\n` +
             `Data de Validade: ${Intl.DateTimeFormat("pt-BR").format(this.dataValidade)}\n` +
             `Ingredientes:\n  - ${this.ingredientes.join('\n  - ')}`
    }
}

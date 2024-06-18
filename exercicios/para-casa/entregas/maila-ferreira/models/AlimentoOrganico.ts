//**AlimentoOrganico**, **ProdutoLimpezaBiodegradavel** e ItemDecoracaoSustentavel são classes que implementam a interface ProdutoEcologico, cada uma representando um tipo específico de produto ecológico.
//Cada classe possui suas próprias propriedades específicas, como data de validade e ingredientes para **AlimentoOrganico**


import { ProdutoEcologico } from "../interfaces/produtoEcologico.interface"

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
  
   
    exibirDetalhes(): string {
      return `Nome: ${this.nome}\n` +
             `Preço: R$ ${this.preco.toFixed(2)}\n` +
             `Data de Validade: ${Intl.DateTimeFormat("pt-BR").format(this.dataValidade)}\n` +
             `Ingredientes:\n  - ${this.ingredientes.join('\n  - ')}`
    }
}
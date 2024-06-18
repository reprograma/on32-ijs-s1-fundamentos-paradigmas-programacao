import { AlimentoOrganico } from "./models/AlimentoOrganico"
import { ItemDecoracaoSustentavel } from "./models/ItenDecoracaoSustentavel"
import { ProdutoLimpezaBiodegradavel } from "./models/ProdutoLimpezaBiodegradavel"

// Alimento orgânico
console.log('Alimento orgânico')
const ingredientes: string[] = [
    "Ovo",
    "Tomate",
    "Cenoura",
    "Brócolis"    
  ]
  
const alimento = new AlimentoOrganico("Omelete com legumes", 14.99, new Date("2024-06-28"), ingredientes)
console.log(alimento.exibirDetalhes())

// Produto de limpeza biodegradável
console.log('Produto de limpeza biodegradável')
const produtoLimpeza = new ProdutoLimpezaBiodegradavel("Amaciante Biodegradável", 13.69, 600)
console.log(produtoLimpeza.exibirDetalhes())

// Item de decoração sustentável
console.log('Item de decoração sustentável')
const itemDimensoes = { largura: 13, altura: 20, profundidade: 15 }
const itemDecoracao = new ItemDecoracaoSustentavel("Caixa de Papel Reciclado", 18.99, "Papel Reciclado", itemDimensoes)
console.log(itemDecoracao.exibirDetalhes())
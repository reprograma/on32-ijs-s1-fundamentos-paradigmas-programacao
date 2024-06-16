import { AlimentoOrganico } from "./models/AlimentoOrganico"
import { ItemDecoracaoSustentavel } from "./models/ItemDecoracaoSustentavel"
import { ProdutoLimpezaBiodegradavel } from "./models/ProdutoLimpezaBiodegradavel"

// Alimento orgânico
console.log('💚 Alimento orgânico 💚')
const ingredientes: string[] = [
    "500 g de cogumelos secos (shiitake e funghi porcini)",
    "1 cenoura cortada grosseiramente",
    "1 cebola cortada grosseiramente",
    "3L de água mineral",
    "Flor de sal a gosto",
    "Pimenta-do-reino moída na hora a gosto",
    "Legumes orgânicos crus (cenoura, alho-poró e abobrinha) a gosto, cortados bem fininhos",
    "Ervas frescas (tomilho, ciboulette e salsinha)",
    "Brotos orgânicos"
  ]
  
const meuAlimento = new AlimentoOrganico("Consomé de cogumelos secos, legumes crus e brotos orgânicos", 14.99, new Date("2024-06-28"), ingredientes)
console.log(meuAlimento.detalhes())

// Produto de limpeza biodegradável
console.log('\n💚 Produto de limpeza biodegradável 💚 ')
const meuProdutoLimpeza = new ProdutoLimpezaBiodegradavel("Sabão Biodegradável", 8.99, 300)
console.log(meuProdutoLimpeza.detalhes())

// Item de decoração sustentável
console.log('\n💚 Item de decoração sustentável 💚')
const minhasDimensoes = { largura: 25, altura: 40, profundidade: 25 }
const meuItemDecoracao = new ItemDecoracaoSustentavel("Luminária de Papel Reciclado", 18.99, "Papel Reciclado", minhasDimensoes)
console.log(meuItemDecoracao.detalhes())
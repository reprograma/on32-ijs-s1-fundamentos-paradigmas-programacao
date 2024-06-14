import { AlimentoOrganico } from "./AlimentoOrganico";
import { ItemDecoracaoSustentavel } from "./ItemDecoracaoSustentavel";
import { ProdutoLimpezaBiodegradavel } from "./ProdutoLimpezaBiodegradavel";

const alimentoOrganico = new AlimentoOrganico("Hamburguer", 5.55, new Date(), ["Tomate", "Carne, Alface"])
const itemDecoracaoSustentavel = new ItemDecoracaoSustentavel("Cacto", 5.50, "Planta", {altura: 0.50, largura: 0.20, profundidade: 0.10 })
const produtoLimpezaBiodegradavel = new ProdutoLimpezaBiodegradavel("Veja", 17.50, 200)

console.log(alimentoOrganico)
console.log(itemDecoracaoSustentavel)
console.log(produtoLimpezaBiodegradavel)
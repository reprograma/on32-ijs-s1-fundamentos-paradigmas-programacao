import { ItemDecoracaoSustentavel } from "./ItemDecoracaoSustentavel";
import { AlimentoOrganico } from "./AlimentoOrganico";
import { ProdutoLimpezaBiodegradavel } from "./ProdutoLimpezaBiodegradavel";

const produto1: ItemDecoracaoSustentavel = new ItemDecoracaoSustentavel("Vaso de planta", 50, "Cerâmica", { largura: 10, altura: 20, profundidade: 10 });

console.log(produto1.exibirInformacoes());

const produto2: AlimentoOrganico = new AlimentoOrganico("Bolo de chocolate", 30, ["chocolate", "farinha", "açúcar", "ovos"], new Date(2021, 10, 15));
console.log(produto2.exibirInformacoes());

const produto3: ProdutoLimpezaBiodegradavel = new ProdutoLimpezaBiodegradavel("Detergente", 5, 500);
console.log(produto3.exibirInformacoes());


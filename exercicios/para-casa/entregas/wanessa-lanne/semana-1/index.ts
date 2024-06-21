import { AlimentoOrganico } from "./alimentoOrganico";
import { ProdutoLimpezaBiodegradavel } from "./produtoLimpezaBiodegradavel";
import { ItemDecoracaoSustentavel } from "./itemDecoracaoSustentavel";

const codProduto1: AlimentoOrganico = new AlimentoOrganico("Talharim Orgânico", 18, new Date(2026, 6, 1), ["Farinha de trigo orgânica enriquecida com ferro e ácido fólico", "biomassa de banana verde orgânica", "cúrcuma orgânica"]);
console.log(codProduto1.exibirInformacoes());

const codProduto2: ProdutoLimpezaBiodegradavel = new ProdutoLimpezaBiodegradavel("Desinfetante natural", 12, 500);
console.log(codProduto2.exibirInformacoes());

const codProduto3: ItemDecoracaoSustentavel = new ItemDecoracaoSustentavel("Luminária", 50, "Bambu", { largura: 30, altura: 45, profundidade: 30 });
console.log(codProduto3.exibirInformacoes());
import { AlimentoOrganico } from "./entregas/ially-samara-silva/alimentoOrganico";
import { ItemDecoracaoSustentavel } from "./entregas/ially-samara-silva/itemDecoracaoSustentavel";
import { ProdutoLimpezaBiodegradavel } from "./entregas/ially-samara-silva/produtoLimpezaBiodegradavel";


const alimento = new AlimentoOrganico("Bolo de banana", 20.99, new Date("22/06/2024"), ["banana, ovo, leite, aveia, manteiga, açúcar"]);
const produtoLimpeza = new ProdutoLimpezaBiodegradavel("Detergente Ecológico", 8.50, 500);
const itemDecoracao = new ItemDecoracaoSustentavel("Vaso de Bambu", 52.00, "Bambu", { largura: 15, altura: 30, profundidade: 15 });


alimento.mostrarDetalhes();
produtoLimpeza.mostrarDetalhes();
itemDecoracao.mostrarDetalhes();

import AlimentoOrganico from "./alimentoOrganico";
import ItemDecoracaoSustentavel from "./itemDecoracaoSustentavel";
import ProdutoLimpezaBiodegradavel from "./produtoLimpezaBiodegradavel";

const organicFood = new AlimentoOrganico("Pão de forma integral", 7.5, new Date(2024,12,31), ["farinha de trigo", "fermento biológico", "açúcar mascavo", "sal", "óleo", "água"] );
console.log(organicFood.exibir());

const sustainableItem = new ItemDecoracaoSustentavel("mesa de madeira de reúso", 300, "madeira", {largura: 1.5, altura: 1.5, profundidade: 1.0,});
console.log(sustainableItem.exibir());

const cleannerProduct = new ProdutoLimpezaBiodegradavel("Esponja ecológica", 8.00, 0.161);
console.log(cleannerProduct.exibir());

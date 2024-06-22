import { AlimentoOrganico } from './classes/AlimentoOrganico';
import { ProdutoLimpezaBiodegradavel } from './classes/ProdutoLimpezaBiodegradavel';
import { ItemDecoracaoSustentavel } from './classes/ItemDecoracaoSustentavel';

const cenouraOrganica = new AlimentoOrganico('Cenoura Orgânica', 3.85, new Date('2024-06-31'), ['Cenoura']);
const desinfetanteLiquido = new ProdutoLimpezaBiodegradavel('Desinfetante Líquido', 17.50, 500);
const vasoSustentavel = new ItemDecoracaoSustentavel('Vaso de Papel', 23.30, 'Papel', { largura: 10, altura: 20, profundidade: 10 });

cenouraOrganica.cadastrar();
cenouraOrganica.exibir();

desinfetanteLiquido.cadastrar();
desinfetanteLiquido.exibir();

vasoSustentavel.cadastrar();
vasoSustentavel.exibir();

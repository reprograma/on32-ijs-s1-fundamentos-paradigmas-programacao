// testando classes e criando os produtos
import AlimentoOrganico from "./models/AlimentoOrganico"
import ItemDecoracaoSustentavel from "./models/ItemDecoracaoSustentavel"
import ProdutoLimpezaBiodegradavel from "./models/ProdutoLimpezaBiodegradavel"



const salada = new AlimentoOrganico('Saladinha de folhas e flores orgânicas com manga e molho curry', 17.99, new Date('2024-06-10'), ['Folhas orgânicas', 'Manga', 'Gergelim preto', 'Flores comestíveis'])

const nhoque = new AlimentoOrganico('Nhoque de inhame e cúrcuma com cenoura orgânica, gergelim e ervas', 25.99, new Date('2024-06-11'), ['Folhas orgânicas', 'Manga', 'Gergelim preto', 'Flores comestíveis'])

const detergente = new ProdutoLimpezaBiodegradavel('Detergente Ypê', 4.10, 500)

const bancoPneu = new ItemDecoracaoSustentavel('Banco de balanço de pneu', 15.99,'Pneu', {largura:60, altura:150, profundidade:60})

salada.exibirInformacoes()


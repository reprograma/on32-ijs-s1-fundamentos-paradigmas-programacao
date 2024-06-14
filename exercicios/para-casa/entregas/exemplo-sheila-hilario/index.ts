import { AlimentoOrganico } from './alimentoOrganico';
import { ProdutoLimpezaBiodegradavel } from './produtoLimpezaBiodegradavel';
import { ItemDecoracaoSustentavel } from './itemDecoracaoSustentavel';

console.log('---------------------------------------');
const alimento = new AlimentoOrganico('Mamão Orgânico', 7.00, new Date('2024-10-07'), ['Mamão']);
console.log(`Nome: ${alimento.nome}`);
console.log(`Preço: R$${alimento.preco.toFixed(2)}`);
console.log(`Data de Validade: ${alimento.dataValidade.toDateString()}`);
console.log(`Ingredientes: ${alimento.ingredientes.join(', ')}`);

console.log('---------------------------------------');
const produtoLimpeza = new ProdutoLimpezaBiodegradavel('Sabão Ecológico', 10.00, 100);
console.log(`Nome: ${produtoLimpeza.nome}`);
console.log(`Preço: R$${produtoLimpeza.preco.toFixed(2)}`);
console.log(`Volume: ${produtoLimpeza.volume} ml`);

console.log('---------------------------------------');
const itemDecoracao = new ItemDecoracaoSustentavel('Cadeira Charles Eames', 240.00, 'Plástico', { largura: 45, altura: 82, profundidade: 43 });
console.log(`Nome: ${itemDecoracao.nome}`);
console.log(`Preço: R$${itemDecoracao.preco.toFixed(2)}`);
console.log(`Material: ${itemDecoracao.material}`);
console.log(`Dimensões (LxAxP): ${itemDecoracao.dimensoes.largura}x${itemDecoracao.dimensoes.altura}x${itemDecoracao.dimensoes.profundidade}`);

console.log('---------------------------------------');

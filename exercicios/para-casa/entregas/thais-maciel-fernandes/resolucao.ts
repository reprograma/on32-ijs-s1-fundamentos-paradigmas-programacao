import { AlimentoOrganico } from "./produtos/produtos.alimentos.organicos";
import { ProdutoLimpezaBiodegradavel } from "./produtos/produtos.limpeza.biodegradavel";
import { ItemDecoracaoSustentavel } from "./produtos/produtos.decoracao.sustentavel";

let alimentosOrganicos: AlimentoOrganico[] = [] 
let produtosDeLimpeza: ProdutoLimpezaBiodegradavel[] = []
let decoracao: ItemDecoracaoSustentavel [] = []

alimentosOrganicos.forEach(produto => produto.cadastrar());
produtosDeLimpeza.forEach(produto => produto.cadastrar());
decoracao.forEach(produto => produto.cadastrar());


alimentosOrganicos.push(new AlimentoOrganico("granola", 15.00, new Date('2024-06-18'), ["grãos diversos","sementes", "uva passa"]));
produtosDeLimpeza.push(new ProdutoLimpezaBiodegradavel("esponjas vegetais", 21.90, new Date('2030-06-18'), 2));
decoracao.push(new ItemDecoracaoSustentavel("rede", 65.00, {largura: 200, altura: 100, profundidade: 50}));
produtosDeLimpeza.push(new ProdutoLimpezaBiodegradavel("escova de dente", 15.90, new Date('2031-05-19'), 5));
alimentosOrganicos.push(new AlimentoOrganico("farinha de sementes", 18.65, new Date('2023-12-25'), ["linhaça"]));


alimentosOrganicos.forEach(produto => produto.cadastrar());
produtosDeLimpeza.forEach(produto => produto.cadastrar());
decoracao.forEach(produto => produto.cadastrar());

//utilize para visualização das tabelas dos produtos separadamente, respeitando seu "tipo"
// console.table(alimentosOrganicos.map(produto => produto.getListaDeProdutos()));
// console.table(produtosDeLimpeza.map(produto => produto.getListaDeProdutos()));
// console.table(decoracao.map(produto => produto.getListaDeProdutos()));


// utilize para visualização de uma tabela única com a listagem geral de produtos, independente de "tipo"
let listagemDeProdutos: any[] = [
    ...alimentosOrganicos,
    ...produtosDeLimpeza,
    ...decoracao
]

console.table(listagemDeProdutos.map(produto => produto.getListaDeProdutos()));

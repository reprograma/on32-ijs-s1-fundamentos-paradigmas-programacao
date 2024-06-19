import { AlimentoOrganico } from "./produtos/produtos.alimentos";
import { ProdutoLimpezaBiodegradavel } from "./produtos/produtos.limpeza";
import { ItemDecoracaoSustentavel } from "./produtos/produtos.decoracao";

let alimentosOrganicos: AlimentoOrganico[] = [] 
let produtosDeLimpeza: ProdutoLimpezaBiodegradavel[] = []
let decoracao: ItemDecoracaoSustentavel [] = []

alimentosOrganicos.push(new AlimentoOrganico("granola", "grãos para pôr no iogurte", 15.00, new Date('2024-06-18')));
produtosDeLimpeza.push(new ProdutoLimpezaBiodegradavel("esponjas vegetais", "kit com 3 esponjas de banho", 25.45, new Date('2030-06-18')));
decoracao.push(new ItemDecoracaoSustentavel("rede", "rede de tricô, pintado à mão", 65.00, new Date('2024-05-19')));
produtosDeLimpeza.push(new ProdutoLimpezaBiodegradavel("escova de dente", "confecção com madeira reflorestada", 20.50,new Date('2060-05-19')));
alimentosOrganicos.push(new AlimentoOrganico("farinha de aveia", "complemento para mingau, leite, frutas, etc...", 18.65, new Date('2023-12-25')));


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

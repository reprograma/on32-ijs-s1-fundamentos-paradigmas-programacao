import { AlimentoOrganico } from "./produtos/produtos.alimentos";
import { ProdutoLimpezaBiodegradavel } from "./produtos/produtos.limpeza";
import { ItemDecoracaoSustentavel } from "./produtos/produtos.utilidade";

let alimentosOrganicos: AlimentoOrganico[] = [] 
let produtosDeLimpeza: ProdutoLimpezaBiodegradavel[] = []
let decoracao: ItemDecoracaoSustentavel [] = []

alimentosOrganicos.push(new AlimentoOrganico("granola", "grãos para pôr no iogurte", 15.00));
produtosDeLimpeza.push(new ProdutoLimpezaBiodegradavel("esponjas vegetais", "kit com 3 esponjas de banho", 15.00));
decoracao.push(new ItemDecoracaoSustentavel("rede", "rede de tricô, pintado à mão", 65.00));
produtosDeLimpeza.push(new ProdutoLimpezaBiodegradavel("escova de dente", "confecção com madeira reflorestada", 20.50))


//tabelas dos produtos separadamente, respeitando seu "tipo"

console.table(alimentosOrganicos);
console.table(produtosDeLimpeza);
console.table(decoracao);


//tabela única com a listagem geral de produtos, independente de "tipo"
// let listagemDeProdutos: any[] = [
//     ...alimentosOrganicos,
//     ...produtosDeLimpeza,
//     ...decoracao
// ]

// console.table(listagemDeProdutos);

import { AlimentosOrganicos } from "./alimentosOrganicos";
import { ProdutosLimpezaBiodegradavel } from "./ProdutosLimpeza";
import { ItemDeDecoracaoSustentavel } from "./itensDecoracao";

// Instanciando um alimento
const alimentoOrganico = new AlimentosOrganicos("Morango Orgânico", 2.99, new Date("2024-06-24"), ["Morango"]);
console.log(`\n Ficha Técnica -- ${alimentoOrganico.nome}\n ${alimentoOrganico.exibirAlimento()}`)

// Instanciando um produto de limpeza
const produtoLimpeza = new ProdutosLimpezaBiodegradavel("Lava Roupas - 3 unidades", 73.22, 300);
console.log(`\n Ficha Técnica -- ${produtoLimpeza.nome}\n ${produtoLimpeza.exibirProduto()}`)

// Instanciando um item de decoração - com variável registrando as dimensões
const dimensoesProduto = {largura: 12.5, altura: 3.5, profundidade:12.5};
const produtoDecoracao = new ItemDeDecoracaoSustentavel("Tigela 100 un", 150.00, "Bagaço Cana de Açúcar Biodegradável", dimensoesProduto);
console.log(`\n Ficha Técnica -- ${produtoDecoracao.nome}\n ${produtoDecoracao.exibirItem()}`)
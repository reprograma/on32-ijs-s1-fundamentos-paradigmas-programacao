import { AlimentosOrganicos } from "./alimentosOrganicos";
import { ProdutosLimpezaBiodegradavel } from "./ProdutosLimpeza";
import { ItemDeDecoracaoSustentavel } from "./itensDecoracao";

// Instanciando um alimento
const maca = new AlimentosOrganicos("Morango Orgânico", 2.99, new Date("2024-06-24"), ["Morango"]);
console.log(`\n Ficha Técnica -- ${maca.nome}\n ${maca.exibirAlimento()}`)

// Instanciando um produto de limpeza
const lava_roupas = new ProdutosLimpezaBiodegradavel("Lava Roupas - 3 unidades", 73.22, 300);
console.log(`\n Ficha Técnica -- ${lava_roupas.nome}\n ${lava_roupas.exibirProduto()}`)

// Instanciando um item de decoração - com variável registrando as dimensões
const dimensoesTigela = {largura: 12.5, altura: 3.5, profundidade:12.5};
const tigela = new ItemDeDecoracaoSustentavel("Tigela 100 un", 150.00, "Bagaço Cana de Açúcar Biodegradável", dimensoesTigela);
console.log(`\n Ficha Técnica -- ${tigela.nome}\n ${tigela.exibirItem()}`)


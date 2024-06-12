import { ProdutoEcologico } from "./produtoEcologico";

export class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    categoria: string;
    dataValidade: string;
    ingredientes: string[];
    constructor(nome: string, preco: number, categoria: string, dataValidade: string, ingredientes: string[]) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
    }

}
export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    categoria: string;
    volume: number;
    constructor(nome: string, preco: number, categoria: string, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.volume = volume;
    }

}
export class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    categoria: string;
    material: string
    dimensoes: {
        largura: number;
        altura: number;
        profundidade: number
    }
    constructor(nome: string, preco: number, categoria: string, material: string, dimensoes: { largura: number; altura: number; profundidade: number }) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.material = material;
        this.dimensoes = dimensoes;
    }

}

const alimentoOrganico = new AlimentoOrganico("Maçã", 2.5, "Frutas", "12/06/2024" , ["Maçã"]);
console.log(`Nome: ${alimentoOrganico.nome}, Preço: ${alimentoOrganico.preco}, Categoria: ${alimentoOrganico.categoria}, Data de Validade: ${alimentoOrganico.dataValidade}, Ingredientes: ${alimentoOrganico.ingredientes}`);

const produtoLimpezaBiodegradavel = new ProdutoLimpezaBiodegradavel("Sabão em Pó", 10, "Limpeza", 500);
console.log(`Nome: ${produtoLimpezaBiodegradavel.nome}, Preço: ${produtoLimpezaBiodegradavel.preco}, Categoria: ${produtoLimpezaBiodegradavel.categoria}, Volume: ${produtoLimpezaBiodegradavel.volume}`);

const itemDecoracaoSustentavel = new ItemDecoracaoSustentavel("Vaso", 50, "Decoração", "Cerâmica", {largura: 10, altura: 20, profundidade: 10});
console.log(`Nome: ${itemDecoracaoSustentavel.nome}, Preço: ${itemDecoracaoSustentavel.preco}, Categoria: ${itemDecoracaoSustentavel.categoria}, Material: ${itemDecoracaoSustentavel.material}, Dimensões: Largura: ${itemDecoracaoSustentavel.dimensoes.largura}, Altura: ${itemDecoracaoSustentavel.dimensoes.altura}, Profundidade: ${itemDecoracaoSustentavel.dimensoes.profundidade}`);
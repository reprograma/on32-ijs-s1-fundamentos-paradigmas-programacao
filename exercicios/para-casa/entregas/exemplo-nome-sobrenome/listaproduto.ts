import { ProdutoEcologico } from "./produtoEcologico";

export class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: string;
    ingredientes: string[];
    constructor(nome: string, preco: number, categoria: string, dataValidade: string, ingredientes: string[]) {
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
    }
 categoria(): void {
    console.log(`Nome: ${alimentoOrganico.nome}, Preço: ${alimentoOrganico.preco},  Data de Validade: ${new Date(alimentoOrganico.dataValidade).toLocaleDateString('pt-BR')}, Ingredientes: ${alimentoOrganico.ingredientes}`);
    
 }
}
export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number;
    constructor(nome: string, preco: number, categoria: string, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }
 categoria(): void {
    console.log(`Nome: ${produtoLimpezaBiodegradavel.nome}, Preço: ${produtoLimpezaBiodegradavel.preco},  Volume: ${produtoLimpezaBiodegradavel.volume}`);
    
 
 }
}
export class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    material: string
    dimensoes: {
        largura: number;
        altura: number;
        profundidade: number
    }
    constructor(nome: string, preco: number, categoria: string, material: string, dimensoes: { largura: number; altura: number; profundidade: number }) {
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;
    }
    categoria(): void {
        console.log(`Nome: ${itemDecoracaoSustentavel.nome}, Preço: ${itemDecoracaoSustentavel.preco}, Material: ${itemDecoracaoSustentavel.material}, Dimensões: Largura: ${itemDecoracaoSustentavel.dimensoes.largura}, Altura: ${itemDecoracaoSustentavel.dimensoes.altura}, Profundidade: ${itemDecoracaoSustentavel.dimensoes.profundidade}`);
        
    
    }

}

const alimentoOrganico = new AlimentoOrganico("Maçã", 2.5, "Frutas", new Date(2022, 11, 1).toLocaleDateString('pt-BR') , ["Maçã"]);

const produtoLimpezaBiodegradavel = new ProdutoLimpezaBiodegradavel("Sabão em Pó", 10, "Limpeza", 500);

const itemDecoracaoSustentavel = new ItemDecoracaoSustentavel("Vaso", 50, "Decoração", "Cerâmica", {largura: 10, altura: 20, profundidade: 10});


alimentoOrganico.categoria();
produtoLimpezaBiodegradavel.categoria();
itemDecoracaoSustentavel.categoria();
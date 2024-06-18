import { ProdutoEcologico } from '../IProdutoEcologico'

export default class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    material: string;
    dimensoes: { largura: number; altura: number; profundidade: number };

    constructor(nome: string, preco: number, material:string, dimensoes:{largura:number; altura:number; profundidade: number}){
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;
        console.log(`Produto ${this.nome} adicionado com sucesso!`)
    }

    exibirInformacoes(): void {
        console.log(`Item de Decoração Sustentável => Nome: ${this.nome}, Preço:${this.preco}, Material:${this.material}, Largura:${this.dimensoes.largura}, Altura:${this.dimensoes.altura}, Profundidade: ${this.dimensoes.profundidade}`)
    }
}

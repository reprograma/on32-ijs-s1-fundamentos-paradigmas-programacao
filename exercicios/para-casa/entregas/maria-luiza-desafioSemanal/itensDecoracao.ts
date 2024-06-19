import { ProdutosOrganicos } from "./interface_ProdutosOrganicos";

export class ItemDeDecoracaoSustentavel implements ProdutosOrganicos{
    nome: string;
    preco: number;
    material: string;
    dimensoes: {
        largura: number;
        altura:number;
        profundidade: number;
    };
    constructor(nome:string, preco:number, material:string, dimensoes:{largura:number; altura:number; profundidade:number}){
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;
    }
    
    exibirItem(): string{
        return `${this.nome}, preço: ${this.preco}, material: ${this.material}, Dimensões ${this.dimensoes.largura} LG X ${this.dimensoes.altura} AL X ${this.dimensoes.profundidade} PR`;
    }
 
}
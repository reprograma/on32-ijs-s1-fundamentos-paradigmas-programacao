import { Produtos } from "./produtos.organicos";
import { TiposEnumProdutosEcologicos } from "../enums/produtos.enum";
import { ProdutoEcologico } from "../interfaces/produtos.interface";

export class ItemDecoracaoSustentavel extends Produtos {
    public dimensoes: { largura: number, altura: number, profundidade: number};
    
    constructor(nome: string, preco:number, dimensoes: { largura: number, altura: number, profundidade: number}){
        super(nome, preco, TiposEnumProdutosEcologicos.UTILIDADE);
        this.dimensoes = dimensoes;
    }

    public exibirProduto(): void {
        console.log(`Produto: ${this.nome} / Dimensões ${this.dimensoes.largura}, ${this.dimensoes.altura}, ${this.dimensoes.profundidade} / Preço ${this.preco} / Tipo: UTILIDADE`);
    }

    public getListaDeProdutos() {
        return {
            ...super.getListaDeProdutos(),
            dimensoes: `${this.dimensoes.largura}x${this.dimensoes.altura}x${this.dimensoes.profundidade}`
        }
    }
}
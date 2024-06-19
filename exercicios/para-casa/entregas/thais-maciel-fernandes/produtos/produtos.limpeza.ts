import { Produtos } from "./produtos";
import { TiposEnumProdutosEcologicos } from "../enums/produtos.enum";
import { ProdutoEcologico } from "../interfaces/produtos.interface";

export class ProdutoLimpezaBiodegradavel extends Produtos {
    constructor(nome: string, descricao:string, preco: number){
        super(nome, descricao, preco, TiposEnumProdutosEcologicos.LIMPEZA);
    }

    public exibirProduto(): void {
        console.log(`Produto: ${this.nome}, Descrição: ${this.descricao}, Preço$ ${this.preco} e Tipo: LIMPEZA`);
    }
}
import { Produtos } from "./produtos";
import { TiposEnumProdutosEcologicos } from "../enums/produtos.enum";
import { ProdutoEcologico } from "../interfaces/produtos.interface";

export class ItemDecoracaoSustentavel extends Produtos {
    constructor(nome: string, descricao:string, preco:number, dataDeValidade: Date){
        super(nome, descricao, preco, dataDeValidade, TiposEnumProdutosEcologicos.UTILIDADE);
    }
    public produtoEstaDentroDaValidade(): boolean {
        return true
    }
    public exibirProduto(): void {
        console.log(`Produto: ${this.nome}, Descrição: ${this.descricao}, Preço ${this.preco}, Produto adequado para consumo: ${this.produtoEstaDentroDaValidade()} e Tipo: UTILIDADE`);
    }
}
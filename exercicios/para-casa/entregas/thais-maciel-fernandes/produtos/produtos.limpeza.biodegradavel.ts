import { Produtos } from "./produtos.organicos";
import { TiposEnumProdutosEcologicos } from "../enums/produtos.enum";
import { ProdutoEcologico } from "../interfaces/produtos.interface";

export class ProdutoLimpezaBiodegradavel extends Produtos {
    public volume: number

    constructor(nome: string, preco: number, dataValidade: Date, volume:number){
        super(nome, preco, TiposEnumProdutosEcologicos.LIMPEZA);
        this.volume = volume;
    }
    public exibirProduto(): void {
        console.log(`Produto: ${this.nome} / Volume ${this.volume} / Preço ${this.preco} / Produto adequado para utilização: ${this.produtoEstaDentroDaValidade()} / Tipo: LIMPEZA`);
    }
    public getListaDeProdutos() {
        return {
            ...super.getListaDeProdutos(),
            volume: this.volume
        }
    }
}
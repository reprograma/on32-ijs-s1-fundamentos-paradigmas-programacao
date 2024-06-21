import { TiposEnumProdutosEcologicos } from "../enums/produtos.enum";
import { ProdutoEcologico } from "../interfaces/produtos.interface";

export class Produtos implements ProdutoEcologico {
    public nome: string;
    public preco: number;
    protected dataValidade?: Date;
    public tipo: TiposEnumProdutosEcologicos;

    constructor(nome: string, preco: number, tipo: TiposEnumProdutosEcologicos, dataValidade?: Date) {
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade ?? undefined;
        this.tipo = tipo;
    }

    public produtoEstaDentroDaValidade(): boolean {
        if (!this.dataValidade) {
        return true;
    }
    let hoje = new Date();
    return this.dataValidade > hoje;
}

    public getListaDeProdutos() {
        return {
            nome: this.nome,
            preco: this.preco,
            tipo: this.tipo,
            estaDentroDaValidade: this.produtoEstaDentroDaValidade()
        }
    }

    public cadastrar(): void {
        console.log(`Produto ${this.nome} cadastrado com sucesso!`)
    }

}
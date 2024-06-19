import { TiposEnumProdutosEcologicos } from "../enums/produtos.enum";
import { ProdutoEcologico } from "../interfaces/produtos.interface";

export class Produtos implements ProdutoEcologico {
    public nome: string;
    public descricao: string;
    public preco: number;
    public tipo: TiposEnumProdutosEcologicos;
    protected dataDeValidade: Date;


    constructor(nome: string, descricao:string, preco: number, dataDeValidade: Date, tipo: TiposEnumProdutosEcologicos){
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.tipo = tipo;
        this.dataDeValidade = dataDeValidade;
    }

    public produtoEstaDentroDaValidade(): boolean {
        let hoje = new Date();
        return this.dataDeValidade > hoje;
    };


    public getListaDeProdutos() {
        return {
            nome: this.nome,
            descricao: this.descricao,
            preco: this.preco,
            tipo: this.tipo,
            estaDentroDaValidade: this.produtoEstaDentroDaValidade()
        }
    }
}
import { TiposEnumProdutosEcologicos } from "../enums/produtos.enum";
import { ProdutoEcologico } from "../interfaces/produtos.interface";

export class Produtos implements ProdutoEcologico {
    public nome: string;
    public descricao: string;
    public preco: number;
    public tipo: TiposEnumProdutosEcologicos;

    constructor(nome: string, descricao:string, preco: number, tipo: TiposEnumProdutosEcologicos){
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.tipo = tipo;
    }
}
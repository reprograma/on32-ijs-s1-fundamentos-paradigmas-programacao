import { TiposEnumProdutosEcologicos } from "../enums/produtos.enum";
import { ProdutosEcologicos } from "../interfaces/produtos.interface";

export class Produtos implements ProdutosEcologicos {
    public nome: string;
    public descricao: string;
    public tipo: TiposEnumProdutosEcologicos;

    constructor(nome: string, descricao:string, tipo:TiposEnumProdutosEcologicos){
        this.nome = nome;
        this.descricao = descricao;
        this.tipo = tipo;
    }
}
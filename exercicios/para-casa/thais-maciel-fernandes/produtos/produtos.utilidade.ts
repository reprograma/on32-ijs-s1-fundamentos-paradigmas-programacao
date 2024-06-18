import { Produtos } from "./produtos";
import { TiposEnumProdutosEcologicos } from "../enums/produtos.enum";
import { ProdutosEcologicos } from "../interfaces/produtos.interface";

export class Utilidade extends Produtos {
    constructor(nome: string, descricao:string){
        super(nome, descricao, TiposEnumProdutosEcologicos.UTILIDADE);
    }
    public exibirProduto(): void {
        console.log(`Produto: ${this.nome}, Descrição: ${this.descricao} e Tipo: UTILIDADE`);
    }
}
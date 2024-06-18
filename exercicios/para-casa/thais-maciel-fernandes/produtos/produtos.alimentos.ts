import { TiposEnumProdutosEcologicos } from "../enums/produtos.enum";
import { ProdutosEcologicos } from "../interfaces/produtos.interface";
import { Produtos } from "./produtos";

export class Alimentos extends Produtos {
    constructor(nome:string, descricao: string){       
        super(nome, descricao, TiposEnumProdutosEcologicos.ALIMENTO);
    }
    public exibirProduto(): void {
        console.log(`Produto: ${this.nome} - Descrição: ${this.descricao} - Tipo: Alimento`);
    }
}


import { TiposEnumProdutosEcologicos } from "../enums/produtos.enum";
import { ProdutoEcologico } from "../interfaces/produtos.interface";
import { Produtos } from "./produtos";

export class AlimentoOrganico extends Produtos {
    constructor(nome: string, descricao:string, preco: number, dataDeValidade: Date){
        super(nome, descricao, preco, dataDeValidade, TiposEnumProdutosEcologicos.ALIMENTO);
    }
    public exibirProduto(): void {
        console.log(`Produto: ${this.nome}, Descrição: ${this.descricao}, Preço ${this.preco}, Produto adequado para consumo: ${this.produtoEstaDentroDaValidade()} e Tipo: ALIMENTO`);
    }
}


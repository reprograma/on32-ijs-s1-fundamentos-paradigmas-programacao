import { TiposEnumProdutosEcologicos } from "../enums/produtos.enum";
import { ProdutoEcologico } from "../interfaces/produtos.interface";
import { Produtos } from "./produtos.organicos";

export class AlimentoOrganico extends Produtos {
    public ingredientes: string[];
    
    constructor(nome: string, preco: number, dataValidade: Date, ingredientes: string[]){
        super(nome, preco, TiposEnumProdutosEcologicos.ALIMENTO, dataValidade);
        this.ingredientes = ingredientes;
    }
    public exibirProduto(): void {
        console.log(`Produto: ${this.nome}/ Ingredientes: ${this.ingredientes.join(", ")} / Preço ${this.preco} / Produto adequado para consumo: ${this.produtoEstaDentroDaValidade()} / Tipo: ALIMENTO`);
    }
    public getListaDeProdutos() {
        return {
            ...super.getListaDeProdutos(),
            ingredientes: this.ingredientes
        };
    }
}


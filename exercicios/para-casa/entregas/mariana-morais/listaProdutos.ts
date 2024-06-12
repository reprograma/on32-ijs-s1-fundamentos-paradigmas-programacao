import { ProdutoEcologico } from "./produtoEcologico";

class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string[];

    constructor(
        nomeAlimento:string,
        precoAlimento:number,
        alimentoValidade:Date,
        alimentoIngredientes:string[]
    ) {
        this.nome = nomeAlimento;
        this.preco = precoAlimento;
        this.dataValidade = alimentoValidade;
        this.ingredientes = alimentoIngredientes;
    }
}
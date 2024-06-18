import { Dimensao } from "../types/dimensao";

export default interface ProdutoEcologico {
    nome:string;
    preco:number;

    exibir():string;
}

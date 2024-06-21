import { TiposEnumProdutosEcologicos } from "../enums/produtos.enum";


export interface ProdutoEcologico {
    nome: string;
    preco: number;
    tipo: TiposEnumProdutosEcologicos;
    produtoEstaDentroDaValidade: () => boolean
}

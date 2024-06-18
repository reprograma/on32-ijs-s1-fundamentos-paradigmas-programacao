import { TiposEnumProdutosEcologicos } from "../enums/produtos.enum";


export interface ProdutosEcologicos {
    nome: string;
    descricao: string;
    tipo: TiposEnumProdutosEcologicos;
}

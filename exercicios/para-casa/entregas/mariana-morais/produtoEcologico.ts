export interface ProdutoEcologico {
    nome:string;
    preco:number;
    cadastrar():void;
    exibirDetalhes():void
}
export interface Dimensoes {
    largura: number;
    altura: number;
    profundidade: number;
}
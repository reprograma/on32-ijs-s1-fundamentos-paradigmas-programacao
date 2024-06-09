export interface ProdutoEcologico {
    nome:string
    preco:number
    cadastrarProduto():void;
    exibirInformacoes():void
}

export interface Dimensoes {
    largura: number,
    altura: number,
    profundidade: number
}
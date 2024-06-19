export interface ProdutoEcologico {
    nome: string;
    preco: number;
    cadastrarProduto(): void;
    exibirInformacoes(): void;
}

export interface Dimensoes {
    altura: number,
    largura: number,
    profundidade: number;
}
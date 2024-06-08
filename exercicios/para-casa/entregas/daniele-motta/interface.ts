export interface ProdutoEcologico {
    nome:string
    preco:number
    cadastrar():void;
    exibir():void
}

export interface Dimensoes {
    largura: number,
    altura: number,
    profundidade: number
}
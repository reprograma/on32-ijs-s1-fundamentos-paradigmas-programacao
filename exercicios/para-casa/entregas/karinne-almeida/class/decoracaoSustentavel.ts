import { ProdutoEcologico } from "../interface/produtoEcologico";

class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    dimensoes: {
        largura: number,
        altura: number,
        profundidade: number
    }

    constructor(nome:string, preco:number, dimensoes:
        {largura: number, altura: number, profundidade: number}) {
        this.nome = nome;
        this.preco = preco;
        this.dimensoes = dimensoes;
    }
}

const itemDecorativo = new ItemDecoracaoSustentavel(
    'Cadeira de Plático Reciclado',
    56,
    {largura: 40, altura: 100, profundidade: 45}
)

console.log(`
    Produto: ${itemDecorativo.nome}
    Preço: R$${itemDecorativo.preco.toFixed(2)}
    Dimensoes: 
    Largura: ${itemDecorativo.dimensoes.largura}
    Altura: ${itemDecorativo.dimensoes.altura}
    Profundidade: ${itemDecorativo.dimensoes.profundidade}
    `
);
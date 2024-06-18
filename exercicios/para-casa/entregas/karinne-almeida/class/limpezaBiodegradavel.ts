import { ProdutoEcologico } from "../interface/produtoEcologico";

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number;

    constructor(nome:string, preco:number, volume:number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }
}

const produtoLimpeza = new ProdutoLimpezaBiodegradavel(
    'Desinfetante',
    27,
    300
)

console.log(`
    Produto: ${produtoLimpeza.nome}
    Preço: R$${produtoLimpeza.preco.toFixed(2)}
    Volume: R$${produtoLimpeza.volume}
    `
);
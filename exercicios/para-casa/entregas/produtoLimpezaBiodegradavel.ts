import ProdutoEcologico from './models/interfaces/produtoEcologico';

export default class ProdutoLimpezaBiodegradavel  implements ProdutoEcologico {

    constructor(public nome:string, public preco:number, public volume:number) { }

    exibir():string {
        return `\nProduto de Limpeza Biodegradável\nNome: ${this.nome},\nPreço R$: ${this.preco},\nVolume: ${this.volume} dm³`;
    }
}


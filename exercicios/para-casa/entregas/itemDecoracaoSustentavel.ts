import ProdutoEcologico from './models/interfaces/produtoEcologico';
import { Dimensao } from './models/types/dimensao';

export default class ItemDecoracaoSustentavel implements ProdutoEcologico {

    constructor(public nome:string, public preco:number, public material:string, public dimensoes:Dimensao) { }

    exibir() {
        return `\nItem de Decoração Sustentável\nNome: ${this.nome},\nPreço R$: ${this.preco},\nMaterial: ${this.material},\nDimensões: largura - ${this.dimensoes.largura} altura - ${this.dimensoes.altura} profundidade: ${this.dimensoes.profundidade}`;
    }
}
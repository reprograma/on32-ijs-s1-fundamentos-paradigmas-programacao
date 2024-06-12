import {ProdutoEcologico} from "./ProdutoEcologico";

class ProdutoLimpeza implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number

    constructor(nome: string, preco:number, volume:number) {
        this.nome= nome
        this.preco= preco
        this.volume= volume
     }
     exibir():string{
        return(`Nome: ${this.nome}, preço: ${this.preco},vomule: ${this.volume}ml`)
     }
}
const Produtos = new ProdutoLimpeza("Lava louça liquido de laranja",8.99, 420)
console.log(Produtos.exibir())

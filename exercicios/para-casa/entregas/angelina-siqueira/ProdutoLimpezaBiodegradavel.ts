import {ProdutoEcologico} from "./ProdutoEcologico";

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number

    constructor(nome: string, preco: number, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }

    cadastrar(): void {
        console.log(`Cadastrando Produto de Limpeza Biodegradável: ${this.nome}`);
    }

    exibir(): void {
        console.log(`Nome: ${this.nome}, Preço: R$${this.preco}, Volume: ${this.volume}ml`);
    }

}
const produtoLimpeza = new ProdutoLimpezaBiodegradavel(
    'Detergente Ecológico',
    15.99,
    500);
produtoLimpeza.cadastrar();
produtoLimpeza.exibir();

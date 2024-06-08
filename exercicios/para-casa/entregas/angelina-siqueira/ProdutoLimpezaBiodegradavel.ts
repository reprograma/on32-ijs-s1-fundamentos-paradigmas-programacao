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

}
const produtoLimpeza = new ProdutoLimpezaBiodegradavel('Detergente Ecológico', 15.99, 500);
console.log(produtoLimpeza.nome); // Detergente Ecológico
console.log(produtoLimpeza.preco); // 15.99
console.log(produtoLimpeza.volume); // 500

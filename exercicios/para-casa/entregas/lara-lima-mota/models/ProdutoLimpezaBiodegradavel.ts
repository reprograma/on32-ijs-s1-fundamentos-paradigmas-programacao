import { ProdutoEcologico } from "../IProdutoEcologico";

export default class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome:string;
    preco:number;
    volume:number;

    constructor(nome: string, preco: number, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
        console.log(`Produto ${this.nome} adicionado com sucesso!`)
    }

    exibirInformacoes(): void {
        console.log(`Produto de limpeza Biodegradável => Nome: ${this.nome}, Preço: ${this.preco}, Volume: ${this.volume}`)
    }
}

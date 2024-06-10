import { ProdutoEcologico } from "./produtoEcologico";
class ProdutoLimpezaBiodegradavel implements ProdutoEcologico{
    nome:string;
    preco:number;

    volume: number;

    constructor(nome:string, preco:number,volume:number){
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }
    exibirInformacoes(): string {
        return `Nome:${this.nome}, Preco:${this.preco},  Volume:${this.volume} ml}`
    }
}

const teste = new ProdutoLimpezaBiodegradavel("teste", 50, 100)
console.log(teste.exibirInformacoes())
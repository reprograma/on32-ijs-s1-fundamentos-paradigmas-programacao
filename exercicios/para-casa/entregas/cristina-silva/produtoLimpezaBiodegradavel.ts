import { ProdutoEcologico } from "./produtoEcologico.";

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume:number;
  
    constructor(nome:string, preco:number, volume:number){
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
       }

    exibirAlimento(): string {
        return `Nome: ${this.nome}, Preço: ${this.preco}, Volume: ${this.volume}`
    }
}

const listarProdutoLimpeza = new ProdutoLimpezaBiodegradavel('Sabão Liquido',25,1000)
console.log(listarProdutoLimpeza.exibirAlimento())

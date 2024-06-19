import { ProdutosOrganicos } from "./interface_produtos";

export class ProdutosLimpezaBiodegradavel implements ProdutosOrganicos{
    nome: string;
    preco: number;
    volume: number;

    constructor(nome:string, preco:number, volume:number){
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }
    
    exibirProduto(): string {
        return `${this.nome}, preço: ${this.preco}, volume: ${this.volume}`
    }

}
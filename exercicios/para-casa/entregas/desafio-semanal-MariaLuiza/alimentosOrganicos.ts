import { ProdutosOrganicos } from "./interface_produtos";

export class AlimentosOrganicos implements ProdutosOrganicos{
    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string[];

    constructor(nome:string, preco:number, dataValidade:Date, ingredientes:string[]){
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
    } 

    exibirAlimento(): string{
        return `${this.nome}, preço ${this.preco}, data de validade ${this.dataValidade}. O(s) ingrediente(s): ${this.ingredientes}`
    }
}
import { ProdutoEcologico } from "./produtoEcologico";


class Testes implements ProdutoEcologico{
    nome:string;
    preco:number;
    material:string

    dimensoes(largura:number, altura:number, profundidade:number) {
        return `Largura:${largura}, Altura:${altura},  Profundidade:${profundidade} cm}`
    }

    constructor(nome:string, preco:number, material:string){
        this.nome = nome;
        this.preco = preco;
        this.material = material
       }

    exibirInformacoes(): string {
        return `Nome:${this.nome}, Preco:${this.preco}, Material:${this.material}`
    }
}

const teste = new Testes("teste", 50, "algodão")
console.log(teste.exibirInformacoes(), teste.dimensoes(5, 7, 8))
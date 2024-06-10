import { ProdutoEcologico } from "./produtoEcologico";


class Testes implements ProdutoEcologico{
    nome:string;
    preco:number;

    dimensoes(largura:number, altura:number, profundidade:number) {
        return `Largura:${largura}, Altura:${altura},  Profundidade:${profundidade} cm}`
    }

    constructor(nome:string, preco:number){
        this.nome = nome;
        this.preco = preco;
       }

    exibirInformacoes(): string {
        return `Nome:${this.nome}, Preco:${this.preco}`
    }
}

const teste = new Testes("teste", 50)
console.log(teste.exibirInformacoes(), teste.dimensoes(5, 7, 8))
import { ProdutoEcologico } from "./produtoEcologico.";

class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    material:string;
    dimensoes:number[]
  
    constructor(nome:string, preco:number, material:string, dimensoes:number[]){
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes
       }

    exibirItemDecoracao(): string {
        return `Nome: ${this.nome}, Preço: ${this.preco}, Material: ${this.material}, Dimensoes: ${this.dimensoes}`
    }
}

const listarItemDecoracao = new ItemDecoracaoSustentavel('Organizador de Bambu', 50.00, 'bambu', [15, 5, 38])
console.log(listarItemDecoracao.exibirItemDecoracao())
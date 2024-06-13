import { produtoEcologico } from "./produtoEcologico";

class itemDecoracaoSustentavel implements produtoEcologico {
    nome: string;
    preco: number;
    material: string;
    dimensoes: {largura: number; altura: number; profundidade: number}

    constructor  ( nome: string, preco: number, material:string, dimensoes: {largura: number, altura: number, profundidade: number}) {
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;    
    } 
}


//para testar:

const produtoDecoracaoSustentavel = new itemDecoracaoSustentavel('Vaso de Madeira Reciclada', 39.99, 'madeira', { largura: 20, altura: 30, profundidade: 15 });
console.log (produtoDecoracaoSustentavel);
import {ProdutoEcologico} from "./ProdutoEcologico";

class ItemDecoracaoSustentavel implements ProdutoEcologico{
    nome: string;
    preco: number;
    material:string;
    dimensoes: { largura: number; altura: number; profundidade: number };

    constructor(nome: string, preco: number, material: string ,dimensoes: { largura: number; altura: number; profundidade: number }) {
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;
    }
}

const item = new ItemDecoracaoSustentavel(
    'Vaso Reciclado',
    29,
    'Plástico Reciclado',
    { largura: 10, altura: 15, profundidade: 10 }
);

console.log(item.nome); // Vaso Reciclado
console.log(item.preco); // 29.99
console.log(item.material); // Plástico Reciclado
console.log(item.dimensoes); // { largura: 10, altura: 15, profundidade: 10 }

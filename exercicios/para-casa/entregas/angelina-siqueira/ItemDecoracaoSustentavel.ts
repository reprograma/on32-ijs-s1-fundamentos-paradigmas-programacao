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

    cadastrar(): void {
        console.log(`Cadastrando Item de Decoração Sustentável: ${this.nome}`);
    }

    exibir(): void {
        console.log(`Nome: ${this.nome}, Preço: R$${this.preco}, Material: ${this.material}, Dimensões: ${this.dimensoes.largura}x${this.dimensoes.altura}x${this.dimensoes.profundidade} cm`);
    }
}

const item = new ItemDecoracaoSustentavel(
    'Vaso Reciclado',
    29,
    'Plástico Reciclado',
    { largura: 10, altura: 15, profundidade: 10 }
);

item.cadastrar();
item.exibir();

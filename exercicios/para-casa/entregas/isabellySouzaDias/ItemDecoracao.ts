import { ProdutoEcologico } from "./ProdutoEcologico";

class ItemDecoracao implements ProdutoEcologico {
    nome: string;
    preco: number;
    material: string;
    altura: number;
    largura: number;
    profundidade: number;
    

    constructor(nome: string, preco: number, material: string, largura: number, altura: number, profundidade: number) {
        this.nome = nome,
            this.preco = preco,
            this.material = material,
            this.altura = altura,
            this.largura = largura,
            this.profundidade = profundidade
    }
    exibir(): string {
        return `movel de nome:${this.nome}, preço: ${this.preco} descrição: material${this.material},largura:${this.largura}, altura:${this.altura} e profundidade:${this.profundidade}`
    }
}
const itens = new ItemDecoracao("Arara De Roupas", 342,"metalon galvanizado",100,180,45)
console.log(itens.exibir())


// Características:
// Altura: 180 Cm
// Comprimento: 100 Cm
// Profundidade: 45 Cm
// Metalon: 2,5 Cm
// Espessura Metalon: 1,25
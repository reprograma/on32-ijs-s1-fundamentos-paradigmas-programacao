import { ProdutoEcologico } from "../interfaces/ProdutoEcologico";

export class ItemDecoracaoSustentavel implements ProdutoEcologico {

    constructor (
        public nome: string, 
        public preco: number,
        public material: string,
        public dimensoes: {
            largura: number,
            altura: number,
            profundidade: number
        }
    ) {}

    cadastrar(): void {
        console.log('${this.nome} cadastrado com sucesso!');
    }

    exibir(): void {
        console.log('Nome: ${this.nome}');
        console.log('Preço: ${this.preco}');
        console.log('Material: ${this.material}');
        console.log('Dimensões: ${this.dimensoes}');
    }
}
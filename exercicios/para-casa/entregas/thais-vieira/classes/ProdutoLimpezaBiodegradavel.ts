import { ProdutoEcologico } from "../interfaces/ProdutoEcologico";

export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {

    constructor (
        public nome: string, 
        public preco: number,
        public volume: number,    
    ) {}

    cadastrar(): void {
        console.log('${this.nome} cadastrado com sucesso!');
    }

    exibir(): void {
        console.log('Nome: ${this.nome}');
        console.log('Preço: ${this.preco}');
        console.log('Volume: ${this.volume}');        
    }
}
import { ProdutoEcologico } from "../interfaces/ProdutoEcologico";

export class AlimentoOrganico implements ProdutoEcologico {

    constructor (
        public nome: string, 
        public preco: number,
        public dataValidade: Date,
        public ingredientes: string[]
    ) {}

    cadastrar(): void {
        console.log('${this.nome} cadastrado com sucesso!');
    }

    exibir(): void {
        console.log('Nome: ${this.nome}');
        console.log('Preço: ${this.preco}');
        console.log('Data de validade: ${this.dataValidade.toDateString()}');
        console.log('Ingredientes: ${this.ingredientes}');
    }
}
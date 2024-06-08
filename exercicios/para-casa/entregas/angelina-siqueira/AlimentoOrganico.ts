import {ProdutoEcologico} from "./ProdutoEcologico";

class AlimentoOrganico implements ProdutoEcologico{
    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string[];

    constructor(nome: string, preco: number, dataValidade: Date, ingredientes: string[]) {
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
    }

    getDataValidadeFormatada(): string {
        return this.dataValidade.toLocaleDateString('pt-BR');
    }

}

const alimentoOrganico = new AlimentoOrganico('Maçã Orgânica', 3.50, new Date('2024-12-31'), ['Maçã']);
console.log(alimentoOrganico.nome); // Maçã Orgânica
console.log(alimentoOrganico.preco); // 3.50
console.log(alimentoOrganico.getDataValidadeFormatada()); // Data formatada
console.log(alimentoOrganico.ingredientes); // ['Maçã']

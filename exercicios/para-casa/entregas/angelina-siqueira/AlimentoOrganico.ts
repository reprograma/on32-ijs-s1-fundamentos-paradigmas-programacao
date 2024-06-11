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

    cadastrar(): void {
        console.log(`Cadastrando Alimento Orgânico: ${this.nome}`);
    }
    exibir(): void {
        console.log(`Nome: ${this.nome}, Preço: R$${this.preco}, Data de Validade: ${this.dataValidade.toLocaleDateString('pt-BR')}, Ingredientes: ${this.ingredientes.join(', ')}`);
    }
}

const alimentoOrganico = new AlimentoOrganico(
    'Maçã Orgânica',
    3.50,
    new Date('2024-06-15'),
    ['Maçã']);
alimentoOrganico.cadastrar();
alimentoOrganico.exibir();

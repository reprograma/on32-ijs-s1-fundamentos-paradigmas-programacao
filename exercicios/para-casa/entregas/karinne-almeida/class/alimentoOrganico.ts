import { ProdutoEcologico } from "../interface/produtoEcologico";

class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string[]
    
    constructor(nome:string, preco:number, dataValidade:Date, ingredientes:string[]) {
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
    }
}

const alimento = new AlimentoOrganico(
    'Geléia de Maçã',
    20,
    new Date('2024-12-31'),
    ['Maçã', 'Açúcar Demerara']
);

console.log(`
    Produto: ${alimento.nome}
    Preço: R$${alimento.preco.toFixed(2)}
    Validade: ${alimento.dataValidade.toLocaleDateString('pt-BR')}
    Ingredientes: ${alimento.ingredientes.join(', ')}
    `
);
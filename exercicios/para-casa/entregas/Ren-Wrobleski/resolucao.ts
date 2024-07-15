// Interface ProdutoEcologico
interface ProdutoEcologico {
    nome: string;
    preco: number;
}

// Classe 1 implementando ProdutoEcologico
class AlimentoOrganico implements ProdutoEcologico {
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

    exibirInformacoes(): void {
        console.log(`Alimento Orgânico:
        Nome: ${this.nome}
        Preço: R$${this.preco.toFixed(2)}
        Data de Validade: ${this.dataValidade.toDateString()}
        Ingredientes: ${this.ingredientes.join(", ")}`);
    }
}

// Classe 2 implementando ProdutoEcologico
class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number;

    constructor(nome: string, preco: number, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }

    exibirInformacoes(): void {
        console.log(`Produto de Limpeza Biodegradável:
        Nome: ${this.nome}
        Preço: R$${this.preco.toFixed(2)}
        Volume: ${this.volume}ml`);
    }
}

// Classe 3 implementando ProdutoEcologico
class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    material: string;
    dimensoes: { largura: number; altura: number; profundidade: number };

    constructor(nome: string, preco: number, material: string, dimensoes: { largura: number; altura: number; profundidade: number }) {
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;
    }

    exibirInformacoes(): void {
        console.log(`Item de Decoração Sustentável:
        Nome: ${this.nome}
        Preço: R$${this.preco.toFixed(2)}
        Material: ${this.material}
        Dimensões: ${this.dimensoes.largura}x${this.dimensoes.altura}x${this.dimensoes.profundidade}cm`);
    }
}

// Teste
const alimento = new AlimentoOrganico("Maçã Orgânica", 5.50, new Date(2024, 10, 10), ["Maçã"]);
const produtoLimpeza = new ProdutoLimpezaBiodegradavel("Detergente Ecológico", 7.80, 500);
const itemDecoracao = new ItemDecoracaoSustentavel("Vaso de Bambu", 35.00, "Bambu", { largura: 10, altura: 20, profundidade: 10 });

alimento.exibirInformacoes();
produtoLimpeza.exibirInformacoes();
itemDecoracao.exibirInformacoes();


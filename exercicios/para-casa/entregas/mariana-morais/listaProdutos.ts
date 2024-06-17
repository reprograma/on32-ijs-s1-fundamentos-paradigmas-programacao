import { ProdutoEcologico, Dimensoes } from "./produtoEcologico";

// Alimento
class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string[];

    constructor(
        nomeAlimento:string,
        precoAlimento:number,
        alimentoValidade:Date,
        alimentoIngredientes:string[]
    ) {
        this.nome = nomeAlimento;
        this.preco = precoAlimento;
        this.dataValidade = alimentoValidade;
        this.ingredientes = alimentoIngredientes;
    }

    cadastrar() {
        console.log(`O alimento ${this.nome} está sendo cadastrado.`);
    }

    exibirDetalhes() {
        const data = new Intl.DateTimeFormat("pt-BR").format(this.dataValidade);

        console.log(`Detalhes do alimento:
            Nome: ${this.nome},
            Preço: ${this.preco},
            Validade: ${data},
            Ingredientes: ${this.ingredientes}
        `)
    }
}

// Produto
class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number;

    constructor(nomeProduto:string, precoProduto:number, volumeProduto:number) {
        this.nome = nomeProduto
        this.preco = precoProduto
        this.volume = volumeProduto
    }

    cadastrar() {
        console.log(`O produto de limpeza ${this.nome} está sendo cadastrado.`);
    }

    exibirDetalhes() {
        console.log(`Detalhes do produto de limpeza:
            Nome: ${this.nome},
            Preço: R$${this.preco},
            Volume: ${this.volume},
        `)
    }
}

// Item
class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    material: string;
    dimensoes: Dimensoes;

    constructor(
        nomeItem:string,
        precoItem:number,
        materialItem:string,
        dimensoesItem:Dimensoes
    ) {
        this.nome = nomeItem;
        this.preco = precoItem;
        this.material = materialItem;
        this.dimensoes = dimensoesItem;
    }

    cadastrar() {
        console.log(`O item decoração sustentável ${this.nome} está sendo cadastrado.`);
    }

    exibirDetalhes() {
        console.log(`Detalhes do item de decoração:
            Nome: ${this.nome},
            Preço: R$${this.preco},
            Material: ${this.material},
            Dimensões: ${this.dimensoes.largura}(largura) x ${this.dimensoes.altura}(altura) x ${this.dimensoes.profundidade}(profundidade)
        `)
    }
}

const alimento = new AlimentoOrganico('Sopa', 5, new Date(2025,6,13), ['Batata, Cenoura, Abóbora']);
const produtoLimpeza = new ProdutoLimpezaBiodegradavel('Desinfetante', 8, 400);
const itemDecoracao = new ItemDecoracaoSustentavel('Tapete', 50, 'Algodão orgânico', {largura: 100, altura: 200, profundidade: 3} )

alimento.cadastrar();
alimento.exibirDetalhes();

produtoLimpeza.cadastrar();
produtoLimpeza.exibirDetalhes();

itemDecoracao.cadastrar();
itemDecoracao.exibirDetalhes();
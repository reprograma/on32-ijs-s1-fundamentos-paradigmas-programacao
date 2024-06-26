import { ProdutoEcologico } from "./interface";

class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string[];

    constructor(nome: string, preco: number, dataValidade: string, ingredientes: string[]) {
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = new Date(dataValidade);
        this.ingredientes = ingredientes;
    }

    exibirInformacoes(): string {
        return `\n O ${this.nome} é um alimento orgânico.\n Preço: ${this.preco.toFixed(2)}, Validade: ${this.dataValidade}, Ingredientes: ${this.ingredientes}   `
    }
}

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number;

    constructor(nome: string, preco: number, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }

    exibirInformacoes(): string {
        return `\n O ${this.nome} é um produto de limpeza biodegradável. \n Preço: ${this.preco.toFixed(2)}, Volume: ${this.volume} ml`
    }
}

class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    material: string;
    dimensoes: { largura: number; altura: number; profundidade: number
    }

    constructor(nome: string, preco: number, material: string,
        dimensoes: { largura: number, altura: number, profundidade: number }) {
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;
    }

    exibirInformacoes(): string {
        return `\n O ${this.nome} é um item de decoração sustentável. \n Preço: ${this.preco}, Material: ${this.material}, Dimensões: Largura: ${this.dimensoes.largura} | Altura: ${this.dimensoes.altura} | Profundidade: ${this.dimensoes.profundidade}`
    }
}

const alimentoOrganico = new AlimentoOrganico(
    "Maçã do Amor Orgânica", 5.00,'2024-06-20T03:24:00',["Maçã", "Canela", "Açúcar Demara"]
);

console.log(alimentoOrganico.exibirInformacoes());

const produtoLimpezaBiodegradavel = new ProdutoLimpezaBiodegradavel(
    "Detergente Biodegradável",10.00,500
);
console.log(produtoLimpezaBiodegradavel.exibirInformacoes());

const itemDecoracaoSustentavel = new ItemDecoracaoSustentavel(
    "Vaso de Bambu",20.00,"Bambu",{ largura: 15, altura: 20, profundidade: 10}
);
console.log(itemDecoracaoSustentavel.exibirInformacoes());
import { ProdutoEcologico } from "./ProdutoEcologico";

class AlimentoOrganico implements ProdutoEcologico { // sempre com letra Maiúscula
    nome: string;
    preco: number;
    dataValidade: Date = new Date(); // INSERIR DATA CHAMAR MÉTODO TYPESCRIPT
    ingredientes: string[] = [];

    constructor(nome: string, preco: number, dataValidade: Date(), ingredientes: string[]) { // método com os parâmetros dentro
    this.nome = nome;
    this.preco = preco;
    this.dataValidade = dataValidade;
    this.ingredientes = ingredientes;
}

// - Adicionar métodos nas classes para cadastrar, exibir e gerenciar produtos.
mostrarInformacoes():string{
    return `Nome: ${this.nome}, Preço: ${this.preco}, Data de Validade: ${this.dataValidade.getFullYear()}, Ingredientes: ${this.ingredientes}}`
    }
}

const organico = new AlimentoOrganico("Bolo", 10, ["laranja", "açúcar", "farinha"]); // instanciando a classe
console.log(organico.mostrarInformacoes) // 


/*

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico { // sempre com letra Maiúscula
    nome: string;
    preco: number;
    volume: number; // atributo

    constructor(nome: string, preco: number, volume: number) { // método com os parâmetros dentro
        this.volume = volume;
    }
}

const limpeza = new ProdutoLimpezaBiodegradavel();
console.log(limpeza)




class ItemDecoracaoSustentavel implements ProdutoEcologico { // sempre com letra Maiúscula
    nome: string;
    preco: number;
    material: string; // atributo
    dimensoes: { largura: number;
        | altura: number;
        | profundidade: number};

constructor(nome: string, preco: number, material: string, largura: number, altura: number, profundidade: number) { // método com os parâmetros dentro
    this.material = material;
    this.largura = largura;
    this.altura = altura;
    this.profundidade = profundidade
}
}

// instanciar essa classe
const decoracao = new ItemDecoracaoSustentavel();
console.log(decoracao)

*/
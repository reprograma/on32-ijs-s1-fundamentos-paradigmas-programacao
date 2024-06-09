import { ProdutoEcologico } from "./interfacePE";

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
    return `\nO ${this.nome} é um alimento orgânico
Informações:
  Preço: ${this.preco} 
  Data de Validade: ${this.dataValidade}
  Ingredientes: ${this.ingredientes}   
  `
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
    return `\nO ${this.nome} é um produto de limpeza biodegradável
Informações:
  Preço: ${this.preco} 
  Volume: ${this.volume}
  `
  }
}

class ItemDecoracaoSustentavel implements ProdutoEcologico {
  nome: string;
  preco: number;
  material: string;
  dimensoes: {
    largura: number;
    altura: number;
    profundidade: number
  }

  constructor(nome: string, preco: number, material: string,
    dimensoes: { largura: number, altura: number, profundidade: number }) {
    this.nome = nome;
    this.preco = preco;
    this.material = material;
    this.dimensoes = dimensoes;
  }

  exibirInformacoes(): string {
    return `\nO ${this.nome} é um item de decoração sustentável 
Informações:
  Preço: ${this.preco} 
  Material: ${this.material}
  Dimensões: Largura: ${this.dimensoes.largura} | Altura: ${this.dimensoes.altura} | Profundidade: ${this.dimensoes.profundidade}
  `
  }
}


const alimentoOrganico = new AlimentoOrganico("Chutney de Manga", 33, '2024-08-25', ['Manga', ' açúcar', ' vinagre de maça', ' cebola']);
console.log(alimentoOrganico.exibirInformacoes());

const produtoLimpezaBiodegradavel = new ProdutoLimpezaBiodegradavel("Sabão Líquido", 52.48, 3);
console.log(produtoLimpezaBiodegradavel.exibirInformacoes());

const itemDecoracaoSustentavel = new ItemDecoracaoSustentavel("Vaso Estilo Orgânico Abs", 70, "Plástico ABS", { largura: 15, altura: 15, profundidade: 7 });
console.log(itemDecoracaoSustentavel.exibirInformacoes());


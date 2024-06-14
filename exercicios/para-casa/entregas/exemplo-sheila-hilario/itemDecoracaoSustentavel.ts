export interface ProdutoEcologico {
  nome: string;
  preco: number;
}

interface Dimensoes {
  largura: number;
  altura: number;
  profundidade: number;
}

export class ItemDecoracaoSustentavel implements ProdutoEcologico {
  nome: string;
  preco: number;
  material: string;
  dimensoes: Dimensoes;

  constructor(nome: string, preco: number, material: string, dimensoes: Dimensoes) {
    this.nome = nome;
    this.preco = preco;
    this.material = material;
    this.dimensoes = dimensoes;
  }
}

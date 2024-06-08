import { IProdutoEcologico, IItemDecoracaoIDimensoes } from "../interfaces";

export class ItemDecoracaoSustentavel implements IProdutoEcologico {
  nome: string;
  preco: number;
  material: string;
  dimensoes: IItemDecoracaoIDimensoes;

  constructor(
    nome: string,
    preco: number,
    material: string,
    dimensoes: IItemDecoracaoIDimensoes
  ) {
    this.nome = nome;
    this.preco = preco;
    this.material = material;
    this.dimensoes = dimensoes;
  }

  exibirInformacoes(): string {
    return `
        Nome: ${this.nome}  
        Preço: R$ ${this.preco}  
        Material: ${this.material}  
        Dimensões: Altura: ${this.dimensoes.altura}cm | Largura: ${this.dimensoes.largura}cm | Profundidade: ${this.dimensoes.profundidade}cm

    `;
  }
}

const dimensoesLuminaria: IItemDecoracaoIDimensoes = {
  altura: 30,
  largura: 8,
  profundidade: 28,
};

const luminariaSustentavel = new ItemDecoracaoSustentavel(
  "Luminária",
  50,
  "Vidro",
  dimensoesLuminaria
);

console.log(luminariaSustentavel.exibirInformacoes());

import { ProdutoEcologico } from "./interfaceProdutosEcologicos";

class ItemDecoracaoSustentavel implements ProdutoEcologico {
 nome: string;
 preco: number;
 material: string;
 dimensoes: {
  largura: number,
  altura: number,
  profundidade: number
 }

 constructor(nome: string, preco: number, material: string, dimensoes: { largura: number, altura: number, profundidade: number }) {
  this.nome = nome;
  this.preco = preco;
  this.material = material;
  this.dimensoes = dimensoes;
 }

 exibirDetalhes(): void {
  console.log(`Nome: ${this.nome}\nPreço: ${this.preco}\nMaterial: ${this.material}\nDimensões (LxAxP): ${this.dimensoes.largura}x${this.dimensoes.altura}x${this.dimensoes.profundidade}`);
 }

gerenciaPreco(novoPreco: number): void {
  this.preco = novoPreco;
  console.log(`Novo preço de ${this.nome} é ${this.preco} reais`);
 }
}

const cadastroItemDecoracaoSustentavel = new ItemDecoracaoSustentavel(
 "Vaso de Bambu",
 45.99,
 "Bambu",
 { largura: 10, altura: 20, profundidade: 10 }
);

cadastroItemDecoracaoSustentavel.exibirDetalhes();
cadastroItemDecoracaoSustentavel.gerenciaPreco(49);


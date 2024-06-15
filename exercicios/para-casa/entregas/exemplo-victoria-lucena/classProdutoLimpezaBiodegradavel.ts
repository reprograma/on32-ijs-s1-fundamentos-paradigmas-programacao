import { ProdutoEcologico } from "./interfaceProdutosEcologicos";

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
 nome: string;
 preco: number;
 volume: number;

 constructor(nome: string, preco: number, volume: number) {
  this.nome = nome;
  this.preco = preco;
  this.volume = volume;
 }

 exibirDetalhes(): void {
  console.log(`Nome: ${this.nome}\nPreço: ${this.preco}\nVolume: ${this.volume} ml`);
 }

 gerenciaPreco(novoPreco: number): void {
  this.preco = novoPreco;
  console.log(`Novo preço do ${this.nome} é ${this.preco}`);
 }
}

const cadastroProdutoLimpeza = new ProdutoLimpezaBiodegradavel(
 "Detergente Ecológico",
 12.50,
 500 
);

cadastroProdutoLimpeza.exibirDetalhes();
cadastroProdutoLimpeza.gerenciaPreco(15);





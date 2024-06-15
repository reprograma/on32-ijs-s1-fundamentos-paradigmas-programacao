import { ProdutoEcologico } from "./interfaceProdutosEcologicos";

class AlimentoOrganico implements ProdutoEcologico {
 nome: string;
 preco: number;
 dataDeValidade: Date;
 ingredientes: string[];

 constructor(nome: string, preco: number, dataDeValidade: Date, ingredientes: string[]) {
  this.nome = nome;
  this.preco = preco;
  this.dataDeValidade = dataDeValidade;
  this.ingredientes = ingredientes
 }
 
 exibirDetalhes(): void {
  console.log(`Nome: ${this.nome}\nPreço: ${this.preco}\nData de Validade: ${this.dataDeValidade.toDateString()}\nIngredientes: ${this.ingredientes.join(', ')}`);
 }
 
 gerenciaPreco(novoPreco: number): void {
  this.preco = novoPreco;
  console.log(`Novo preço da ${this.nome} é ${this.preco} reais`);
 }
}

const cadastroAlimentoOrganico = new AlimentoOrganico(
 "Maçã Orgânica",
 5.99,
 new Date("2024-12-31"),
 ["Maçã"]
);

cadastroAlimentoOrganico.exibirDetalhes();
cadastroAlimentoOrganico.gerenciaPreco(10);




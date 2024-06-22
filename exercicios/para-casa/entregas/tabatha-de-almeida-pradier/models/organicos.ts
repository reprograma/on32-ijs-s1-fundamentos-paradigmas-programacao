import { ProdutosEco } from "../produto-ecologico.interface";

export default class Organicos implements ProdutoEco {
  nome: string;
  preco: number;
  dataValidade: Date;
  ingredientes: string[];

  constructor(
    nome: string,
    preco: number,
    dataValidade: Date,
    ingredientes: string[]
  ) {
    this.nome = nome;
    this.preco = preco;
    this.dataValidade = dataValidade;
    this.ingredientes = ingredientes;
    console.log(`Produto ${this.nome} adicionado com sucesso!`);
  }

  exibirInformacoes(): void {
    console.log(
      `Alimento Orgânico - Nome: ${this.nome}, Preço: ${
        this.preco
      }, Data de Validade: ${this.dataValidade.toLocaleDateString("pt-BR")}`
    );
  }
}

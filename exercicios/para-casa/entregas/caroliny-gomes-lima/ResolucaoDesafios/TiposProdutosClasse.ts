import { ProdutoEcologico } from "./ProdutosEcologicosIterface";

class AlimentoOrganico implements ProdutoEcologico {
  nome: string;
  preco: number;
  dataValidade: string;
  ingredientes: string[];

  constructor(
    nome: string,
    preco: number,
    dataValidade: string,
    ingredientes: string[]
  ) {
    this.nome = nome;
    this.preco = preco;
    this.dataValidade = dataValidade;
    this.ingredientes = ingredientes;
  }
  exibirProduto(): string {
    return `Produto Ecologico do tipo Alimento Organico! 
    - Nome: ${this.nome}, 
    - preco: R$${this.preco} 
    - validade: ${this.dataValidade}, 
    - ingrediente: ${this.ingredientes}`;
  }
}

//----------------------------------------------------------------

class LimpezaBiodegradavel implements ProdutoEcologico {
  nome: string;
  preco: number;
  volume: number;

  constructor(nome: string, preco: number, volume: number) {
    this.nome = nome;
    this.preco = preco;
    this.volume = volume;
  }
  exibirProduto(): string {
    return `Produto Ecologico do tipo Produto de Limpeza Biodegradavel! 
    - Nome: ${this.nome}, 
    - preco: R$${this.preco} 
    - volume: Qtde ${this.volume},`;
  }
}

//----------------------------------------------------------------

class MateriaisEscolaresReciclaveis implements ProdutoEcologico {
  nome: string;
  preco: number;
  material: string;
  dimensoes: {
    largura: number;
    altura: number;
    profundidade: number;
  };

  constructor(
    nome: string,
    preco: number,
    material: string,
    dimensoes: {
      largura: number;
      altura: number;
      profundidade: number;
    }
  ) {
    this.nome = nome;
    this.preco = preco;
    this.material = material;
    this.dimensoes = dimensoes;
  }
  exibirProduto(): string {
    return `Produto Ecologico do tipo Material Escolar Reciclavel! 
    - Nome: ${this.nome}, 
    - preco: R$${this.preco} 
    - material: ${this.material},
    - dimensões: ${this.dimensoes.largura}X${this.dimensoes.altura}X${this.dimensoes.profundidade}cm,`;
  }
}

//Função para escoher o produto por numero
function escolhaProduto(produtoOpcao: number): void {
  const ProdAlimentoOrganico = new AlimentoOrganico("Banana", 23.75, "12/05/2023", ["água", "banana", "leite", "trigo", "fermento"]);
  const ProdLimpezaBiodegradavel = new LimpezaBiodegradavel("Omo reciclavel",23.75, 265);
  const ProdMateriaiEscolarReciclavel = new MateriaisEscolaresReciclaveis("Caderno tilibra", 23.75, "caderno reciclado", { largura: 20, altura: 30, profundidade: 2});

  //Condição que verifica opção do produto escohida pelo numero do produto
  if (produtoOpcao === 0) {
    console.log(ProdAlimentoOrganico.exibirProduto());
  } else if (produtoOpcao === 1) {
    console.log(ProdLimpezaBiodegradavel.exibirProduto());
  } else if (produtoOpcao === 2) {
    console.log(ProdMateriaiEscolarReciclavel.exibirProduto());
  } else {
    console.log("Tipo de produto não existe")
  }
}

//instancia da funçao com o numero escolhido para opção do produto
escolhaProduto(2);

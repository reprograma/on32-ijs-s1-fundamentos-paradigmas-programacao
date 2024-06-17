import { Produto } from "./produto";

class Bolsa implements Produto {
  codigo: String;
  nome: String;
  modelo: String;
  valor: number;
  marca: String;

  constructor(
    codigo: String,
    nome: String,
    tipo: String,
    valor: number,
    marca: String
  ) {
    this.codigo = codigo;
    this.nome = nome;
    this.modelo = tipo;
    this.valor = valor;
    this.marca = marca;
  }

  excluir(codigo: string, bolsas: Produto[]): Produto[] {
    return bolsas.filter((produto) => produto.codigo !== codigo);
  }

  consultar(nome: String, produtos: Produto[]): Produto | undefined {
    return bolsas.find((produto) => produto.nome === nome);
  }
}

//Cadastra nova bolsa
let bolsaCouro = new Bolsa(
  "00001",
  "eco Bag Couro",
  "transversal",
  190.0,
  "ReproEco"
);

let bolsaRetalhos = new Bolsa(
  "00002",
  "eco Bag Tecido",
  "mochila",
  125.0,
  "Fuxicos e retalhos"
);

console.log(bolsaCouro, bolsaRetalhos);

//Populando lista de produtos
let bolsas: Produto[] = [];
bolsas.push(bolsaCouro, bolsaRetalhos);

console.log(bolsas);

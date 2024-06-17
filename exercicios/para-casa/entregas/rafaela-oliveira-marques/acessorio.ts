import Antialergico from "./antialergico";
import { Produto } from "./produto";

class Acessorio extends Antialergico implements Produto {
  codigo: String;
  nome: String;
  modelo: String;
  valor: number;
  marca: String;
  antialergico: boolean;

  constructor(
    codigo: String,
    nome: String,
    tipo: String,
    valor: number,
    marca: String,
    antialergico: boolean
  ) {
    super();
    this.codigo = codigo;
    this.nome = nome;
    this.modelo = tipo;
    this.valor = valor;
    this.marca = marca;
    this.antialergico = antialergico;
  }
  excluir(codigo: string, acessorios: Produto[]): Produto[] {
    return acessorios.filter((produto) => produto.codigo !== codigo);
  }
  consultar(nome: string, acessorios: Produto[]): Produto | undefined {
    return acessorios.find((produto) => produto.nome === nome);
  }
}

//Cadastrando novo acessorio
let colar = new Acessorio(
  "0001",
  "Colar",
  "Feminino",
  35.0,
  "Adornos e Acessorios",
  true
);
console.log(colar);

//Populando lista de acessorios
let acessorios: Produto[] = [];
acessorios.push(colar);
console.log(acessorios);

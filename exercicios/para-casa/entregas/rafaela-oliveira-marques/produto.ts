export interface Produto {
  codigo: String;
  nome: String;
  modelo: String;
  valor: number;
  marca: String;

  excluir(codigo: string, produtos: Produto[]): Produto[];
  consultar(nome: string, produtos: Produto[]): Produto | undefined;
}

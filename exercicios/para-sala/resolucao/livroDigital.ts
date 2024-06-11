import { Livro } from "./livro";


class LivroDigital implements Livro {
  titulo:string;
  autor:string;
  formato:string;

  constructor(titulo:string, autor:string, formato:string){
    this.titulo = titulo;
    this.autor = autor;
    this.formato = formato;
  }

  detalhe():string{
    return `Título: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}`;
  }

}

  const avatar = new LivroDigital("Avatar - O último mestre do ar", "Michael Dante DiMartino, Bryan Konietzko", "PDF");
  const turmaDaMonica = new LivroDigital("Turma da Mônica", "Mauricio de Sousa", "EPUB");
  console.log(avatar.detalhe());
  console.log(turmaDaMonica.detalhe());

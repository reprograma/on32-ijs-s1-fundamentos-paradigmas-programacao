import { Livro } from "./livro";

class LivroDigital implements Livro {
    titulo:string;
    autor:string;
    formato:string;

    constructor (titulo:string, autor:string, formato:string) {
        this.titulo = titulo
        this.autor = autor
        this.formato = formato
    }

      detalhar(): string {
        return `Título: ${this.titulo},
        Autor: ${this.autor},
        Formato: ${this.formato}`
      }
}

const meuLivroDigital = new LivroDigital("Biblioteca da meia-noite", "Matt Heig", "PDF")
console.log(meuLivroDigital.detalhar())
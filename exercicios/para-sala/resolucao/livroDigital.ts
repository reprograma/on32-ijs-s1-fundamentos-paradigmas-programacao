import { Livro } from "./livro";

export class LivroDigital implements Livro {
    titulo: string;
    autor: string;
    formato: string;

    constructor(titulo: string, autor: string, formato: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.formato = formato;
    }

    detalhes(): string {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}`;
    }
}

const meuLivroDigital = new LivroDigital("O Senhor dos Anéis", "J.R.R. Tolkien", "PDF");
console.log(meuLivroDigital.detalhes());
import {Livro} from "./livro";

class LivroDigital implements Livro{
    titulo;
    autor;
    formato;

    public constructor(titulo: string, autor: string, formato: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.formato = formato;
    }

    detalhes(): string {
        return `Título: ${this.titulo}, Autor: ${this.autor} Formato: ${this.formato}`;
    }
}

const meuLivro = new LivroDigital("Spring Snow","Siqueira","PDF");
console.log(meuLivro.detalhes());

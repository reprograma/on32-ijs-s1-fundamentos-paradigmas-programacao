import { Livro } from "./livro";

class LivroDigital implements Livro {
    titulo;
    autor;
    formato;

    constructor(titulo: string, autor: string, formato: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.formato = formato
    }

    detalhe(): string {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}`
    }
}

const meuLivroDigital = new LivroDigital("Quarto de Despejo", "Carolina Maria de Jesus", "PDF");
console.log(meuLivroDigital.detalhe())

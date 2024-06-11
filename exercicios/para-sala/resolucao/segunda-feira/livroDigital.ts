
import { livro } from "./livro"; 

class LivroDigital implements livro { 

    titulo; //quando referenciamos na interface não precisamos necessariamente informar o tipo novamente
    autor;
    formato;

    constructor(titulo: string, autor: string, formato: string) {
        this.titulo = titulo; 
        this.autor = autor;
        this.formato = formato;
    }

    detalhe(): string {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}`;
    }
}

const meuLivro = new LivroDigital("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "PDF");

console.log(meuLivro.detalhe());
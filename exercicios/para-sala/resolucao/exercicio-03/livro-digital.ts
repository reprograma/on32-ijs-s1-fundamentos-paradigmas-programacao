import { Livro } from "./livro";

class LivroDigital implements Livro {
    titulo: string;
    autor: string;
    tipo: string;

    constructor(titulo: string, autor: string, tipo: string) {
        this.autor = autor
        this.tipo = tipo
        this.titulo = titulo
    }
    detalhe(): string {
       return `Título: [${this.titulo}], Autor: [${this.autor}], Formato: [${this.tipo}]`
    }

}


const novoLivroCoraline = new LivroDigital("Coraline", "Neil Gaiman", "PDF")

console.log(novoLivroCoraline.detalhe())
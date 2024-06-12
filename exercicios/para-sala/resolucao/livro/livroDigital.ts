import { Livro } from './livro'

class LivroDigital implements Livro {
    titulo;
    autor;
    formato;

    constructor(titulo:string, autor:string, formato:string) {
        this.titulo = titulo
        this.autor = autor
        this.formato = formato
    }

    detalhes(): string {
        return `
            Detalhes do livro:
            Título: ${this.titulo},
            Autor: ${this.autor},
            Formato: ${this.formato}
        `
    }
}

const meuLivroDigital = new LivroDigital("Quarto de despejo", "Carolina Maria de Jesus", "PDF")

console.log(meuLivroDigital.detalhes())
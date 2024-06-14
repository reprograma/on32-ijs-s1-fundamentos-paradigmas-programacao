import { Livro } from "./livroInterface";

class LivroDigital implements Livro {
    titulo: string;
    autor: string;
    formato: string;

    constructor(titulo: string, autor: string, formato: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.formato = formato;
    }
    detalhe(): string {
        return `Título: ${this.titulo}, Autor: ${this.autor} Formato: ${this.formato}`
        
    }
}
const ProdLivroDigital = new LivroDigital("Senhor Dos Dinossauros", "J.J Miller", ".pdf");
console.log(ProdLivroDigital.detalhe());
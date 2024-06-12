"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LivroDigital {
    constructor(titulo, autor, formato) {
        this.titulo = titulo;
        this.autor = autor;
        this.formato = formato;
    }
    detalhe() {
        return `Titulo: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}`;
    }
}
const meuLivroDigital = new LivroDigital("Quarto de despejo", "Carolina Maria De Jesus", "PDF");
console.log(meuLivroDigital.detalhe());
//# sourceMappingURL=livrodigital.js.map
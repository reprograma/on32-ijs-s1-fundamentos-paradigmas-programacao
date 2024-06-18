import { Livro } from "./livro";

class LivroDigital implements Livro {
    titulo: string; 
    autor: string;
    formato:string 

    constructor(titulo:string, autor: string, formato: string){
    this.titulo = titulo;
    this.autor = autor;
    this.formato = formato
}

detalhe(): string {
    return `Título: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}`
}
}

let meuLivroDigital = new LivroDigital("Memórias Póstumas", "Braz Cubas", "epub");

console.log(meuLivroDigital.detalhe());
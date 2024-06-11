import { Livro } from "./livro";

class LivroDigital implements Livro {
    titulo: string;
    autor: string;
    formato: string;


    constructor(titulo: string, autor: string, formato: string){
        this.titulo = titulo;
        this.autor = autor;
        this.formato = formato;
    }

    detalhe(): string {
        return `Titulo: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}`
    }
}

const meuLivroDigital = new LivroDigital("As coisas que você só vê quando desacelera: Como manter a calma em um mundo frenético", "Haemin Sunim", "Físico" );
console.log(meuLivroDigital.detalhe())
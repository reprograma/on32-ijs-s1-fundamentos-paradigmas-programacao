import Livro from "../ILivro";

export default class LivroDigital implements Livro {
    titulo: string;
    autor: string;
    formato:string;
    
    constructor(nome:string, autor:string, formato:string){
        this.titulo = nome;
        this.autor = autor;
        this.formato = formato

    }

    detalhe(): string {
        let detalhe = `Título: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}`
        return detalhe
    }
}
import { Livro } from "./livro";

class LivrosDigitais implements Livro{
    titulo: string;
    autor: string;
    formato:string;

    constructor (titulo:string,autor:string,formato:string){
        this.titulo =titulo
        this.autor = autor
        this.formato = formato
    }

    detalhe(): string {
        return(`Titulo do livro:${this.titulo} escrito por: ${this.autor} em formato ${this.formato}`)
    }
}
const livrinhos = new LivrosDigitais("Jogos Vorazes","Collins","impresso")

console.log(livrinhos.detalhe())


// titulo:string;
//     autor: string;
//     detalhe():string;
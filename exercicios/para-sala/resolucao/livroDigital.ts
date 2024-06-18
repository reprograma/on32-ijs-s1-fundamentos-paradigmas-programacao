import { Format } from './models/enums/format';
import Livro from './models/interface/livro';

class LivroDigital implements Livro {

    constructor(public titulo:string,public autor:string, public formato:Format){}

    detalhes():string {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}`;
        // Título: Quarto de Despejo, Autor: Carolina Mª de Jesus, Formato: PDF
    }
}

const meuLivro = new LivroDigital("Quarto de Despejo", "Carolina Mª de Jesus", Format.PDF)
console.log(meuLivro.detalhes())
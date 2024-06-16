import { Livro } from "./livro.interface"

class LivroDigital implements Livro {
    titulo: string
    autor: string
    formato: string
  
    constructor(titulo: string, autor: string, formato: string) {
      this.titulo = titulo
      this.autor = autor
      this.formato = formato
    }
  
    detalhe(): string {
      return `Titulo: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}`
    }
  }
  
const meuLivroDigital = new LivroDigital("O incolor Tsukuru Tazaki", "Haruki Murakami", "MOBI")
  
console.log(meuLivroDigital.detalhe())
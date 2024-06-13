import { produtoEcologico } from "./produtoEcologico";


class produtoLimpezaBiodegradavel implements produtoEcologico {
    nome: string;
    preco: number;
    volume: number;
  
    constructor(nome: string, preco: number, volume: number) {
      this.nome = nome;
      this.preco = preco;
      this.volume = volume;
    }
  }

//para testar:

const listaProdutosLimpeza = new produtoLimpezaBiodegradavel ( 'Vanish', 14.99, 200 )
console.log (`Nome do produto: ${listaProdutosLimpeza.nome}, Preço do produto: ${listaProdutosLimpeza.preco}, Tamanho do pacote: ${listaProdutosLimpeza.volume}`) 
  
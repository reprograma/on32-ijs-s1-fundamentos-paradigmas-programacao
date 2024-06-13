import { ProdutoEcologico } from "./ProdutoEcologico";

// PRIMEIRA CLASSE
class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: Date; // INSERIR DATA CHAMAR MÉTODO TYPESCRIPT
    ingredientes: string[];
constructor(nome: string, preco: number, dataValidade: number, ingredientes: string[]) {
    this.nome = nome;
    this.preco = preco;
    this.dataValidade = new Date (dataValidade);
    this.ingredientes = ingredientes;
    }
infosOrganico():string {
    return `Nome: ${this.nome}, Preço: R$ ${this.preco},00, Data de Validade: ${this.dataValidade.getFullYear()}, Ingredientes: ${this.ingredientes}}`
    }
}
const organico = new AlimentoOrganico("Bolo", 10, 11/6/2024 , ["laranja", " açúcar", " farinha"]); // instanciando a classe
console.log(organico.infosOrganico()) // 

// SEGUNDA CLASSE
class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number;
constructor(nome: string, preco: number, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }
infosLimpeza(): string{
    return `Nome: ${this.nome}, Preço: R$ ${this.preco},00, Volume: ${this.volume}ml}`
    }
}
const limpeza = new ProdutoLimpezaBiodegradavel("Sabão", 5, 50);
console.log(limpeza.infosLimpeza())

// TERCEIRA CLASSE
class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    material: string;
    dimensoes: { 
        largura: number;
        altura: number;
        profundidade: number};
constructor(nome: string, preco: number, material: string, dimensoes: {largura: number, altura: number, profundidade: number}) {
    this.nome = nome;
    this.preco = preco;
    this.material = material;
    this.dimensoes = dimensoes;
    }
infosDecoracao(): string{
    return `Nome: ${this.nome}, Preço: R$ ${this.preco},00, Material: ${this.material}, Dimensões = Largura: ${this.dimensoes.largura}cm, Altura: ${this.dimensoes.altura}cm, Profundidade: ${this.dimensoes.profundidade}cm}`
    }
}
const decoracao = new ItemDecoracaoSustentavel("Quadro", 50, "Bambu", {largura: 10, altura: 80, profundidade: 30});
console.log(decoracao.infosDecoracao())

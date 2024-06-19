import { Dimensoes, ProdutoEcologico } from "./produto";

class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: string;
    lstIngredientes: string[];

    constructor(nome: string, preco: number, validade: string, ingredientes: string[]){
        this.nome = nome;
        this.preco = preco;
        this.lstIngredientes = ingredientes
        
        const dia = "21"
        const mes = "06"
        const ano = "2024"
        this.dataValidade = `${dia}/${mes}/${ano}`}

    cadastrarProduto() {
        console.log(`Adiciona alimento orgânico: ${this.nome}`)}

    exibirInformacoes(): void {
        console.log(`Detalhes do Produto: Nome: ${this.nome}, Preço: R$ ${this.preco}, Validade: ${this.dataValidade}, Lista de Ingredientes: ${this.lstIngredientes}`)}
}

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number;
        
    constructor(nome: string, preco: number, volume: number){
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;}

    cadastrarProduto() {
        console.log(`Adiciona Produto de Limpeza BioDegradável: ${this.nome}`)}

    exibirInformacoes(): void {
        console.log(`Detalhes do Produto de Limpeza BioDegradável: Nome: ${this.nome}, Preço: R$ ${this.preco}, Volume: ${this.volume}`)}
}

class ItemDecoracaoSustentavel implements ProdutoEcologico {  
    nome: string;
    preco: number;
    material: string;
    dimensoes: Dimensoes;

    constructor(nome: string, preco: number, material: string, dimensoes: Dimensoes) {
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;}

    cadastrarProduto() {
        console.log(`Adiciona Item de Decoração Sustentável: ${this.nome}`)}

    exibirInformacoes() {
        console.log(`Nome: ${this.nome}, Preço: R$ ${this.preco}, Material: ${this.material}, 
        Dimensões: Largura: ${this.dimensoes.largura}, Altura: ${this.dimensoes.altura}, Profundidade: ${this.dimensoes.profundidade}`)}
}

const alimento = new AlimentoOrganico('Morango', 12.99, "20/06/2024", ["Morango"])
alimento.cadastrarProduto()
alimento.exibirInformacoes()
console.log()
const produtoLimpeza = new ProdutoLimpezaBiodegradavel("Kit multiuso YVY", 46.90, 50)
produtoLimpeza.cadastrarProduto()
produtoLimpeza.exibirInformacoes()
console.log()
const itemDecoracao = new ItemDecoracaoSustentavel("Pendente Bambu Preto", 1281.55, "Metal", {largura: 19, altura: 29, profundidade: 80})
itemDecoracao.cadastrarProduto()
itemDecoracao.exibirInformacoes()
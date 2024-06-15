//Local que está importando
import { ProdutoEcologico } from "./produtoEcologico";

//Classe AlimentoOrganico
class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string[];

        constructor(nome: string, preco: number, dataValidade: Date, ingredientes: string[]) {
           this.nome = nome;
           this.preco = preco;
            this.dataValidade = dataValidade;
            this.ingredientes = ingredientes;
        }
        exibirDetalhes(): void{
            console.log(`Nome: ${this.nome} Preço R$ ${this.preco} Data de validade: ${this.dataValidade.toDateString()} Ingredientes: ${this.ingredientes}`)
        }
}

//Classe produtolimpezaBiodegradavel
class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number ;

    constructor(nome: string, preco: number, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume
    }
    exibirDetalhes(): void{
        console.log(`Nome: ${this.nome} Preço R$ ${this.preco} Volume: ${this.volume} L`)
    }
}

//Classe ItemDecoracaoSustentavel
class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    material: string;
    largura: number;
    altura: number;
    profundidade: number;

    constructor(nome: string, preco: number, material: string, largura: number, altura: number, profundidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.largura = largura;
        this.altura = altura;
        this.profundidade = profundidade;
    }
    exibirDetalhes() : void {
        console.log(`Nome: ${this.nome} Preço R$ ${this.preco} Material: ${this.material} Altura: ${this.altura} cm Largura: ${this.largura} cm Profundidade: ${this.profundidade} cm`)
    }
}

const alimentoOrganico = new AlimentoOrganico ("Leite Vegetal de Aveia", 18.90, new Date(2024, 12, 15),["Água ", "aveia ","Outros..."]);
const produtoLimpezaBiodegradavel = new ProdutoLimpezaBiodegradavel ("Sabão Vegetal", 5.00,100);
const itemDecoracaoSustentavel = new ItemDecoracaoSustentavel ("Caixa Ecológica",45.00,"Palha", 80, 70, 80)
alimentoOrganico.exibirDetalhes()
produtoLimpezaBiodegradavel.exibirDetalhes()
itemDecoracaoSustentavel.exibirDetalhes()
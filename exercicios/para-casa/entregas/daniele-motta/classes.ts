import { ProdutoEcologico } from "./interface";

class AlimentoOrganico implements ProdutoEcologico {
    nome: string
    preco: number
    dataValidade: Date
    ingredientes: string[]

    constructor(nome:string, preco:number, validade:Date, ingredientes: string[]) {
        this.nome = nome
        this.preco = preco
        this.dataValidade = validade
        this.ingredientes = ingredientes
    }

    exibirInformacoes(): void {
        console.log(`
        Nome: ${this.nome}, 
        Preço: R$ ${this.preco}, 
        Validade: ${this.dataValidade.toDateString()}, 
        Ingredientes: ${this.ingredientes} `)
    }
}

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string
    preco: number
    volume: number 

    constructor(nome:string, preco:number, volume:number) {
        this.nome = nome
        this.preco = preco
        this.volume = volume
    }

    exibirInformacoes() {
        console.log(`Nome: ${this.nome}, 
        Preço: R$ ${this.preco}, 
        Volume: ${this.volume} g`)
    }
}

class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string
    preco: number
    material:string
    dimensoes: {
        largura: number,
        altura: number,
        profundidade: number
    }

    constructor(nome:string, preco:number, material:string, dimensoes: {largura: number, altura: number, profundidade:number}) {
        this.nome = nome
        this.preco = preco
        this.material = material
        this.dimensoes = dimensoes
    }

    exibirInformacoes() {
        console.log(`
        Nome: ${this.nome}, 
        Preço: R$ ${this.preco}, 
        Material: ${this.material},
        Dimensoes: 
            Largura - ${this.dimensoes.largura},
            Altura - ${this.dimensoes.altura},
            Profundidade - ${this.dimensoes.profundidade}`)
    }
}

const data = new Date(2024, 6, 8)
const alimento = new AlimentoOrganico('Banana', 5, data, ['Banana'] )
const produtoLimpeza = new ProdutoLimpezaBiodegradavel('Sabão', 10, 300 )
const item = new ItemDecoracaoSustentavel('Cadeira Reciclada', 100, 'Madeira reciclada', {largura: 100, altura: 70, profundidade: 40})


alimento.exibirInformacoes()
produtoLimpeza.exibirInformacoes()
item.exibirInformacoes()
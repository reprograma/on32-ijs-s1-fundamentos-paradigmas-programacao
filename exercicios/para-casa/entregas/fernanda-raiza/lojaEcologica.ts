import { produtoEcologico } from "./produtoEcologico";

class alimentoOrganico implements produtoEcologico {
        dataValidade: Date;
        ingredientes: string;
        nome: string;
        preco: number;
        

        constructor(dataValidade: Date, ingredientes: string, nome:string, preco:number){
            this.dataValidade = dataValidade;
            this.ingredientes = ingredientes;
            this.nome = nome;
            this.preco = preco;
        }

        exibeProduto():void {
            console.log(`O nome do produto é: ${this.nome}, seus ingredientes são: ${this.ingredientes}, seu preço é de: ${this.preco}, a data de validade deste produto é: ${this.dataValidade.toLocaleDateString('pt-BR')}`)
        }
}

const leiteVegetal = new alimentoOrganico(new Date(2027, 0, 26), "castanha de caju e água", "leite vegetal", 14.50)

class ProdutoLimpezaBiodegradavel implements produtoEcologico {
        nome: string;
        preco: number;
        volume: number;

        constructor(nome: string, preco:number, volume:number){
            this.nome = nome;
            this.preco = preco;
            this.volume = volume;
        }
        exibeProduto():void {
            console.log(`Produto de limpeza: ${this.nome}, Preço: ${this.preco}, volume em ml: ${this.volume}`)
        }
}
const sabaoLiquido = new ProdutoLimpezaBiodegradavel("Sabão Líquido", 40.00, 500)

class ItemDecoracaoSustentavel implements produtoEcologico {
        nome: string;
        preco: number;
        material: string;
        dimensoes:{
            altura: number;
            largura: number;
            profundidade: number;
        }

        constructor(nome: string, preco:number, material:string, dimensoes:{altura:number, largura:number, profundidade:number}){
            this.nome = nome;
            this.preco = preco;
            this.material = material;
            this.dimensoes = dimensoes;
            this.dimensoes.altura = dimensoes.altura;
            this.dimensoes.largura = dimensoes.largura;
            this.dimensoes.profundidade = dimensoes.profundidade;
        }

        exibeProduto():void {
            console.log(`O Item de decoração é: ${this.nome}, o preço é: ${this.preco}, o seu material é: ${this.material}, e suas dimensões em centímetros, são: altura: ${this.dimensoes.altura}, largura: ${this.dimensoes.largura}, profundidade: ${this.dimensoes.profundidade}`)
        }

    }
    const velaAromatica = new ItemDecoracaoSustentavel("Vela Aromática", 35.60, "parafina", { altura:10 , largura:20, profundidade:30})


    leiteVegetal.exibeProduto();
    sabaoLiquido.exibeProduto();
    velaAromatica.exibeProduto();
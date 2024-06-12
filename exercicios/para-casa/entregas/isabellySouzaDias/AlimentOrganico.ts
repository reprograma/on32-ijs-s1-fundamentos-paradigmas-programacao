import {ProdutoEcologico} from "./ProdutoEcologico";

class AlimentOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: number;
    ingredientes: string[]

    constructor(nome: string, preco: number, dataValidade: number, ingredientes: string[]) {
        this.nome = nome
        this.preco = preco
        this.dataValidade = dataValidade
        this.ingredientes = ingredientes
    }
    exibir():string{
        return(`Nome: ${this.nome}, preço: ${this.preco}, Data de Validade: ${this.dataValidade}, Ingredientes:${this.ingredientes}`)
     }
}
const Alimentos = new AlimentOrganico("Molho Shoyu Orgânico Tradicional",30.30, 12,["Soja orgânica, trigo orgânico, água e sal marinho."])
console.log(Alimentos.exibir())


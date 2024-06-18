import ProdutoEcologico from './models/interfaces/produtoEcologico';


export default class AlimentoOrganico implements ProdutoEcologico {

    constructor(public nome:string, public preco:number, public dataValidade:Date, public ingredientes:string[]) { }

    exibir():string {
       return `\nAlimento Orgânico\nNome: ${this.nome},\nPreço R$: ${this.preco},\nData de validade: ${Intl.DateTimeFormat("pt-BR").format(this.dataValidade)}, \nIngredientes: ${this.ingredientes}`;
    }
}

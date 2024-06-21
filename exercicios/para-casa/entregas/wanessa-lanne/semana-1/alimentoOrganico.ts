import { ProdutoEcologico } from "./produtoEcologico";

export class AlimentoOrganico implements ProdutoEcologico {
    nome:string;
    preco:number;
    dataValidade: Date;
    ingredientes:string[];   

    constructor(nome:string, preco:number, dataValidade:Date, ingredientes:string []){
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;

    }
    exibirInformacoes():string {       
        let ingredientesFormatados = this.ingredientes.map(ingrediente => `- ${ingrediente}`).join("\n");
        let dataValidadeFormatada = this.formatarData(this.dataValidade);
        return `Nome: ${this.nome}\nPreço: R$${this.preco.toFixed(2)}\nData de validade: ${dataValidadeFormatada}\nIngredientes:\n${ingredientesFormatados}\n`
    }
       
    private formatarData(data: Date): string {
        let dia = data.getDate().toString().padStart(2, '0');
        let mes = (data.getMonth()).toString().padStart(2, '0');
        let ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }
}


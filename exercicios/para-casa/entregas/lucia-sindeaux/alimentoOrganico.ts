import { produtoEcologico } from "./produtoEcologico";

class alimentoOrganico implements produtoEcologico {

    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string[]

    constructor(nome: string, preco:number, dataValidade: Date, ingredientes: string[]) {
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
      }
}

//Para testar:

const listaAlimentoOrganico = new alimentoOrganico('Galinha Caipira', 20.50, new Date(2024, 6, 11), ['Galinha criada em condições adequadas', 'Sem conservantes']);

console.log(`
Nome do produto: ${listaAlimentoOrganico.nome}
Preço do produto: ${listaAlimentoOrganico.preco}
Data de validade: ${listaAlimentoOrganico.dataValidade}
Ingredientes: ${listaAlimentoOrganico.ingredientes.join(', ')}
`); 
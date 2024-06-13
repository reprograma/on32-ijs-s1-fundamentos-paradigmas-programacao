import { ProdutoEcologico } from "./ProdutoEcologico";

class AlimentoOrganico implements ProdutoEcologico { // sempre com letra Maiúscula
    
    dataValidade: Date(); // INSERIR DATA CHAMAR MÉTODO TYPESCRIPT
    ingredientes: string[];

    constructor(dataValidade: Date(), ingredientes: string) { // método com os parâmetros dentro
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
    }
}

const organico = new AlimentoOrganico(); // instanciando a classe
console.log(organico) // 




class ProdutoLimpezaBiodegradavel implements ProdutoEcologico { // sempre com letra Maiúscula
    volume: number; // atributo

    constructor(volume: number) { // método com os parâmetros dentro
        this.volume = volume;
    }
}

const limpeza = new ProdutoLimpezaBiodegradavel();
console.log(limpeza)




class ItemDecoracaoSustentavel implements ProdutoEcologico { // sempre com letra Maiúscula
    material: string; // atributo
    dimensoes: { largura: number;
        |        altura: number;
        |        profundidade: number};

    constructor(material: string, largura: number, altura: number, profundidade: number) { // método com os parâmetros dentro
        this.material = material;
        this.largura = largura;
        this.altura = altura;
        this.profundidade = profundidade
    }
}

// instanciar essa classe
const decoracao = new ItemDecoracaoSustentavel();
console.log(decoracao)


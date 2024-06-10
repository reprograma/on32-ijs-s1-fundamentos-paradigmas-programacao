// Interface ProdutoEcologico
interface ProdutoEcologico {
    nome: string;
    preco: number;
}

// Classe AlimentoOrganico
class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    validade: string;

    constructor(nome: string, preco: number, validade: string) {
        this.nome = nome;
        this.preco = preco;
        this.validade = validade;
    }

    // Método adicional específico para AlimentoOrganico
    info(): string {
        return `Alimento Organico: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Validade: ${this.validade}`;
    }
}

// Classe ProdutoLimpezaBiodegradavel
class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    ingredientes: string[];

    constructor(nome: string, preco: number, ingredientes: string[]) {
        this.nome = nome;
        this.preco = preco;
        this.ingredientes = ingredientes;
    }

    // Método adicional específico para ProdutoLimpezaBiodegradavel
    info(): string {
        return `Produto de Limpeza Biodegradável: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Ingredientes: ${this.ingredientes.join(", ")}`;
    }
}

// Classe ItemDecoracaoSustentavel
class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    material: string;

    constructor(nome: string, preco: number, material: string) {
        this.nome = nome;
        this.preco = preco;
        this.material = material;
    }

    // Método adicional específico para ItemDecoracaoSustentavel
    info(): string {
        return `Item de Decoração Sustentável: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Material: ${this.material}`;
    }
}

// Criando instâncias das classes
const macaOrganica = new AlimentoOrganico("Maçã Orgânica", 5.99, "10/06/2024");
const detergenteBio = new ProdutoLimpezaBiodegradavel("Detergente Biodegradável", 12.50, ["Água", "Tensoativo natural"]);
const vasoEco = new ItemDecoracaoSustentavel("Vaso Ecológico", 35.00, "Bambu");

// Exibindo informações dos produtos
console.log(macaOrganica.info());
console.log(detergenteBio.info());
console.log(vasoEco.info());

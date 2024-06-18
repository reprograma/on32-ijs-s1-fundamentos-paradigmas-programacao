// CRIAÇÃO DE VARIÁVEIS //

// let: variáveis mutáveis
let numero:number = 155;
console.log(numero)

let nome:string = "Maria Luiza";
console.log(nome)

const pi:number = 3.14;
console.log(pi)


// função - reutilização de código 
function saudacao(nome:string, idade:number) {
    //console com template 
    console.log(`Olá eu me chamo ${nome} e tenho ${idade} anos.`);
}

//chamando função utilizando variáveis
const nomeUsuario:string = "Maria Luiza"
const idade:number = 18;
saudacao(nomeUsuario, idade) //variáveis como parâmetros

//chamando função passando os valores diretos
saudacao("Carlos", 49)

//OBJETO DIRETO
const pessoa = {
    // declararação do tipo de dado recebido nas propriedades não é obrigatória
    nome:"Alice",
    idade:15,
    cidade:"Salvador",
    //criando função de apresentação 
    apresentar: function():string {
    return `Olá meu nome é ${this.nome}, eu tenho ${this.idade} e sou da cidade de ${this.cidade}`
}
}
//chamando a função atrelada ao objeto direto
console.log(pessoa.apresentar())
//podemos acessar outras informações  dentro do objeto criado 
console.log(pessoa.idade)

// criando classe pessoas para a criação de objetos pessoas
class Pessoas{
    nomePessoa:string; 
    idadePessoa:number;
    
    constructor(nomePessoa: string, idadePessoa:number){
        this.nomePessoa = nomePessoa;
        this.idadePessoa = idadePessoa;
    }
    
    apresentaPessoa(): string {
        return `It's me, hi!. Meu nome é ${this.nomePessoa}, eu tenho ${this.idadePessoa} anos`;
    }

}

// Criação de objeto "pessoa01"
const pessoa01 = new Pessoas("Maria Luiza", 18)
console.log(pessoa01)

// CLASSE

/*class Carro {
    marca:string;
    modelo:string;
    ano:number

    constructor(marca:string, modelo:string, ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const meuCarro = new Carro("Toyota", "Corolla", 2024);
console.log(meuCarro)*/



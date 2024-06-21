// let numero:number = 10;
// console.log(numero)

// let nome:string = "Wanessa";
// console.log(nome)

// const pi:number = 3.14;
// console.log(pi)


// função
//anotação: 1º O ts é uma sequência, então ele vai começar a ler de cima pra baixo, dentro da função eu preciso colocar qual parâmetro e o tipo que eu quero receber
// function saudacao(nome:string, idade:number) {
//     console.log(`Olá eu me chamo ${nome} e tenho ${idade} anos.`);
// }
//2ª criação de variável
// const nomeUsuario:string = "Wanessa" 
// const idade:number = 27;
//3ª colocar a variável como método
// saudacao(nomeUsuario, idade)

//OBJETO
// const pessoa = {
//     nome:"Alice",
//     idade:15,
//     cidade:"Salvador",
//     apresentar: function():string {
//         return `Olá meu nome é ${this.nome}, eu tenho ${this.idade} e sou da cidade de ${this.cidade}`
//     }
// }

// console.log(pessoa.apresentar())

// CLASSE

class Carro {
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
console.log(meuCarro)
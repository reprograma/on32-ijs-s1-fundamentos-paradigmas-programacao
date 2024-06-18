# Funções:
``` 
function saudacao(nome:string, idade:number) {  
    //console com template   
    console.log(`Olá eu me chamo ${nome} e tenho ${idade} anos.`);  
}
```

## chamando função utilizando variáveis
const nomeUsuario:string = "Maria Luiza"  
const idade:number = 18;  
saudacao(nomeUsuario, idade) //variáveis como parâmetros  


## chamando função passando os valores diretos
saudacao("Carlos", 49)

# Criação de objetos - OBJETO DIRETO

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

## Objeto pessoa
### Declaração de objeto => const pessoa = {...}
### Definição de métodos e proepriedades são feitas dentro de {}

## Propriedades
### Nome, que receberá o valor "Alice" e será do tipo String
### Idade, que receberá o valor 15 e será do tipo number
### Cidade, que receberá o valor "Salvador" e será do tipo String

## Métodos
### Método apresentar, atrelado ao objeto "pessoa"
### Dentro da função é retornada uma apresentação simples utilizando o "template literals" que contém o "this", onde refere-se ao próprio objeto criado

## Chamada
### console.log(pessoa.apresentar()); - Aqui, "pessoa.apresentar()" é chamado para executar o método apresentar do objeto pessoa.
### O método retorna a string formatada, que é então impressa no console usando console.log.

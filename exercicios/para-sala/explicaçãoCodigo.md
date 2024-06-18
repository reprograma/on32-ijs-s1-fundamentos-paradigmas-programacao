# Funções
``` typescript
function saudacao(nome:string, idade:number) {  
    //console com template   
    console.log(`Olá eu me chamo ${nome} e tenho ${idade} anos.`);  
}
```

## chamando função utilizando variáveis
``` typescript
const nomeUsuario:string = "Maria Luiza"  
const idade:number = 18;  
saudacao(nomeUsuario, idade) //variáveis como parâmetros  
```

## chamando função passando os valores diretos
```typescript
saudacao("Carlos", 49)
```

# Objetos
## Objeto direto
```typescript
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
```
# Explicação de código
## Objeto pessoa
1. Declaração de objeto => const pessoa = {...}
2. Definição de métodos e proepriedades são feitas dentro de {}

## Propriedades
1. Nome, que receberá o valor "Alice" e será do tipo String
2. Idade, que receberá o valor 15 e será do tipo number
3. Cidade, que receberá o valor "Salvador" e será do tipo String

## Métodos
1. apresentar: É um método definido e atrelado no objeto pessoa.
2. function() { ... } ou apresentar() { ... }: Ambas as formas definem uma função que faz parte do objeto pessoa.
3. return ...: Dentro do método apresentar, temos uma instrução return que retorna uma string formatada usando os valores das propriedades nome, idade e cidade do objeto pessoa. O uso de ${this.nome}, ${this.idade} e ${this.cidade} dentro da string interpolada (template literals) permite acessar essas propriedades diretamente do objeto pessoa usando this.

## Chamada
1. *console.log(pessoa.apresentar());* --> Aqui, "_pessoa.apresentar()_" é chamado para executar o método apresentar do objeto pessoa.
2. O método retorna a string formatada, que é então impressa no console usando console.log.


# Criando classes para objetos
``` typescript 

// criando classe pessoas para a criação de objetos 
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

// Representação de objetos, onde, cada pessoa, será um objeto.

// Criação de objeto "pessoa01"
const pessoa01 = new Pessoas("Maria Luiza", 18)
console.log(pessoa01)
```

# Explicação de código
## Declaração
1. Declaração de classe "Pessoa"

## Propriedades
1. *nomePessoa: string;* --> Declara uma propriedade nomePessoa que armazena o nome da pessoa como uma string.
2. *idadePessoa: number;* --> Declara uma propriedade idadePessoa que armazena a idade da pessoa como um número.

## Constructor
1. *constructor(nomePessoa: string, idadePessoa: number) { ... }*: É o método especial utilizado para inicializar objetos criados a partir da classe Pessoas.
2. *this.nomePessoa = nomePessoa;* --> Dentro do construtor, this.nomePessoa se refere à propriedade nomePessoa da instância atual da classe Pessoas. nomePessoa (sem this.) refere-se ao parâmetro do construtor.
3. *this.idadePessoa = idadePessoa;* --> Similarmente, this.idadePessoa se refere à propriedade idadePessoa da instância atual, e idadePessoa (sem this.) refere-se ao parâmetro do construtor.
4. Quando uma nova instância de Pessoas é criada (new Pessoas("Maria", 30) por exemplo), o construtor é chamado para inicializar nomePessoa com "Maria" e idadePessoa com 30.

## Método
1. *apresentaPessoa(): string { ... }* --> Define um método chamado apresentaPessoa que retorna uma string.
2. *return It's me, hi!. Meu nome é ${this.nomePessoa}, eu tenho ${this.idadePessoa} anos;* --> Utiliza interpolação de string (template literals) para construir uma mensagem que inclui o nome e a idade da pessoa armazenados nas propriedades nomePessoa e idadePessoa.


# O QUE SÃO CLASSES?
# O QUE SÃO OBJETOS?
# O QUE SÃO MÉTODOS?
# O QUE É O CONSTRUCTOR?
# O que são interfaces?
* As interfaces estabelecem um 

# Leitura complementar
* https://medium.com/@habbema/typescript-functions-548d0bfa5cf7
* https://www.alura.com.br/artigos/poo-programacao-orientada-a-objetos
* https://medium.com/@habbema/typescript-functions-548d0bfa5cf7
* https://www.academicotech.com/post/o-que-sao-metodos-na-programacao-orientada-a-objetos-com-exemplos-em-java-e-python
* https://www.dio.me/articles/entenda-facilmente-programacao-orientada-a-objeto-poo
* https://www.typescriptlang.org/docs/handbook/2/classes.html
* https://learn.microsoft.com/pt-br/dotnet/csharp/programming-guide/classes-and-structs/constructors
* https://pt.stackoverflow.com/questions/73530/para-que-serve-um-construtor




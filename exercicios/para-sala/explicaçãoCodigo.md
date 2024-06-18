# Funções:
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
# Criação de objetos - OBJETO DIRETO
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
1. console.log(pessoa.apresentar()); - Aqui, "pessoa.apresentar()" é chamado para executar o método apresentar do objeto pessoa.
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

# O QUE SÃO CLASSES?
# O QUE SÃO OBJETOS?
# O QUE SÃO MÉTODOS?
<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online On32 - Imersão JavaScript | Semana 1 | 2024 | Professora Natália Salles

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
* Crie uma nova branch (Para isso digite em seu terminal: `git checkout -b nome-da-sua-branch`)
* Agora abra o projeto em seu VScode (Para isso digite `code .` e aperte enter)

### Objetivo
Aprender os fundamentos de paradigmas de programação, especialmente ao comparar a programação orientada a objetos (POO) com outros tipos de programação, e fornecer uma compreensão sólida dos conceitos fundamentais e das diferenças entre esses paradigmas. Introdução ao TypeScript, apresentando as particularidades iniciais da linguagem.

### Resumo
O que veremos na aula de hoje?
- [Fundamentos de Paradigmas de Programação](#paradigmas-de-programação)
- [Tipagem](#tipagem)
- [POO (Programação Orientada a Objetos)](#programação-orientada-a-objetos)
    - [Instruções](#instruções)
    - [Objetivo](#objetivo)
    - [Resumo](#resumo)

- [Conteúdo](#conteúdo)

  - [Paradigmas de Programação](#paradigmas-de-programação)
    - [O que são e para que servem?](#o-que-são-e-para-que-servem)
    - [Benefícios](#benefícios)
    - [Abordagens](#abordagens)

  - [Tipagem](#tipagem)
    - [O que são e para que servem?](#o-que-são-e-para-que-servem-1)
    - [Benefícios](#benefícios-1)
    - [Abordagens](#abordagens-1)
    - [Implementação](#implementação-1)

  - [Programação Orientada a Objetos](#programação-orientada-a-objetos)
    - [O que são e para que servem?](#o-que-são-e-para-que-servem-2)
    - [Benefícios](#benefícios-2)
    - [Abordagens](#abordagens-2)
    - [Implementação](#implementação-2)

  - [Exercícios](#exercícios)
  - [Material da aula](#material-da-aula)
  - [Links Úteis](#links-úteis)
    
# Conteúdo

## Paradigmas de Programação  
  ### O que são e para que servem
  Paradigmas de programação são estilos ou abordagens para resolver problemas usando uma linguagem de programação. Eles definem a estrutura e a forma como os programas são escritos e organizados.

  ### Benefícios
  - **Clareza e Simplicidade**: Cada paradigma oferece maneiras diferentes de pensar sobre problemas e soluções, o que pode tornar o código mais claro e mais fácil de entender.
  - **Reutilização de Código**: Paradigmas como a programação orientada a objetos incentivam a reutilização de código através de herança e composição.
  - **Eficiência e Performance**: Paradigmas como a programação funcional podem levar a códigos mais eficientes e fáceis de paralelizar.

  ### Abordagens
  - **Programação Procedural**: Foca em uma sequência de instruções que são executadas para realizar uma tarefa.
  - **Programação Orientada a Objetos (POO)**: Estrutura o código em torno de objetos que possuem propriedades e métodos.
  - **Programação Funcional**: Trata a computação como a avaliação de funções matemáticas e evita estados mutáveis.

# Tipagem

## O que são e para que servem?
Tipagem refere-se ao sistema de tipos usado por uma linguagem de programação para definir e restringir os tipos de dados que podem ser manipulados por variáveis e funções. Serve para garantir a consistência e a segurança do código, ajudando a evitar erros de tipo e proporcionando uma documentação mais clara.

## Benefícios
- **Detecção de Erros em Tempo de Compilação**: Tipagem estática permite a identificação de muitos erros antes da execução do programa.
- **Autocompletar e IntelliSense**: Fornece suporte avançado em IDEs, melhorando a produtividade do desenvolvedor.
- **Manutenção**: Facilita a refatoração e a manutenção do código, tornando-o mais legível e sustentável.
- **Segurança**: Previne erros de tipo em tempo de execução, aumentando a robustez do programa.

## Abordagens
- **Tipagem Estática**: Os tipos são verificados em tempo de compilação. Exemplos: TypeScript, Java.
- **Tipagem Dinâmica**: Os tipos são verificados em tempo de execução. Exemplos: JavaScript, Python.
- **Tipagem Forte**: Restringe operações entre tipos incompatíveis. Exemplo: Python.
- **Tipagem Fraca**: Permite conversões implícitas entre tipos. Exemplo: JavaScript.

## Implementação
Exemplo de tipagem estática em TypeScript:

```typescript
// Definição de uma função com tipagem estática
function adicionar(a: number, b: number): number {
    return a + b;
}

let resultado = adicionar(5, 3);
console.log(resultado); // 8
```
# Programação Orientada a Objetos

## O que são e para que servem?
Programação Orientada a Objetos (POO) é um paradigma de programação que organiza o software em torno de objetos, que são instâncias de classes. Cada objeto pode conter dados (atributos) e métodos (funções) que operam sobre esses dados. POO é usada para criar sistemas mais modularizados e reutilizáveis.

## Benefícios
- **Modularidade**: Permite dividir o código em partes menores e mais gerenciáveis.
- **Reutilização de Código**: Facilita o uso de código existente através de herança e composição.
- **Manutenção**: Torna o código mais fácil de entender, modificar e depurar.
- **Escalabilidade**: Suporta o desenvolvimento de grandes aplicações de forma organizada.

## Abordagens
- **Classes e Objetos**: Classes definem a estrutura e o comportamento de objetos. Objetos são instâncias de classes.
- **Herança**: Permite que uma classe (subclasse) herde propriedades e métodos de outra classe (superclasse).
- **Polimorfismo**: Permite que métodos com o mesmo nome funcionem de maneiras diferentes dependendo do objeto.
- **Encapsulamento**: Restringe o acesso direto aos dados de um objeto, permitindo acesso apenas através de métodos definidos.

## Implementação
  Exemplo de implementação em TypeScript:

  ```typescript
  // Programação Orientada a Objetos
  class Animal {
      nome: string;
      constructor(nome: string) {
          this.nome = nome;
      }
      fazerSom() {
          console.log(`${this.nome} está fazendo um som!`);
      }
  }

  let cachorro = new Animal("Cachorro");
  cachorro.fazerSom(); // Cachorro está fazendo um som!
```

### Exercícios 
* [Exercicio para sala](/exercicios/para-sala/)
* [Exercicio para casa](/exercicios/para-casa/)

### Material da aula 
* [Material](/material)

### Links Úteis
* 

<p align="center">
Desenvolvido com :purple_heart:  
</p>


# Exercício de Casa 🏠 

## Nome do Exercício

- Explicação do exercício: 
Você desenvolverá um sistema de gerenciamento de produtos ecológicos utilizando apenas classes e interfaces simples e introdutórias em TypeScript.
Este sistema permitirá que os usuários cadastrem e visualizem uma variedade de produtos sustentáveis, incluindo alimentos orgânicos, produtos de limpeza biodegradáveis, entre outros.

O objetivo deste desafio é criar uma arquitetura básica para o sistema, utilizando conceitos simples de classes e interfaces em TypeScript.
Cada classe deve representar um tipo de produto ecológico e implementar uma interface que defina os métodos e propriedades necessários para gerenciar esse tipo de produto.

**Sua tarefa inclui:**

- Identificar os tipos de produtos ecológicos a serem gerenciados.
- Criar uma interface simples para representar a estrutura básica de um produto ecológico.
- Desenvolver classes para cada tipo de produto, implementando a interface definida.
- Adicionar métodos nas classes para cadastrar, exibir e gerenciar produtos.
- Testar as classes criadas criando instâncias de objetos e invocando os métodos implementados.

**Passo a passo:**

- Criar uma interface **ProdutoEcologico** para representar a estrutura básica de um produto ecológico, contendo propriedades como nome e preco.
- Criar três classes (**AlimentoOrganico**, **ProdutoLimpezaBiodegradavel** e **ItemDecoracaoSustentavel**) que implementam a interface **ProdutoEcologico**.
- Cada classe representa um tipo específico de produto ecológico, como alimentos orgânicos, produtos de limpeza biodegradáveis e itens de decoração sustentáveis.
- Utilizar o construtor das classes para inicializar as propriedades dos objetos durante a instanciação.
- Criar instâncias de objetos das classes criadas para exemplificar a utilização das classes e interfaces.

```lua
          +-------------------+
          |   ProdutoEcologico|
          +-------------------+
          | - nome: string    |
          | - preco: number   |
          +-------------------+
                  /_\
                   |
         +-------------------+
         | AlimentoOrganico  |
         +-------------------+
         | - dataValidade: Date|
         | - ingredientes: string[]|
         +-------------------+
                  /_\
                   |
+-------------------------------+
| ProdutoLimpezaBiodegradavel   |
+-------------------------------+
| - volume: number              |
+-------------------------------+
                  /_\
                   |
+-----------------------------------+
| ItemDecoracaoSustentavel          |
+-----------------------------------+
| - material: string               |
| - dimensoes: { largura: number;  |
|                altura: number;   |
|                profundidade: number}|
+-----------------------------------+

```

Diagrama:

- **ProdutoEcologico** é a interface básica que define as propriedades comuns a todos os produtos ecológicos, como nome e preço.
- **AlimentoOrganico**, **ProdutoLimpezaBiodegradavel** e **ItemDecoracaoSustentavel** são classes que implementam a interface ProdutoEcologico, cada uma representando um tipo específico de produto ecológico.
- Cada classe possui suas próprias propriedades específicas, como data de validade e ingredientes para **AlimentoOrganico**, volume para **ProdutoLimpezaBiodegradavel** e material e dimensões para **ItemDecoracaoSustentavel**.

 
---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [x] Fiz o fork do repositório.
- [x] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [x] Criei minha branch (` git checkout -b nome-sobrenome `)
- [x] Criei a pasta com o meu nome dentro da pasta entregas (` mkdir nome-sobrenome`)
- [x] Resolvi o exercício dentro da minha pasta. Como no [exemplo](/on21-imersao-js-S1-TDD/exercicios/para-casa/entregas/exemplo-nome-sobrenome/).
- [x] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [x] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [ ] Criei um Pull Request seguindo as orientações que estao nesse [documento](/on21-imersao-js-S1-TDD/exercicios/para-casa/instrucoes-pull-request.md).

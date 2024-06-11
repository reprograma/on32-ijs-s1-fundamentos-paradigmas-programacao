# Mercadinho Ecológico

## Estrutura do Projeto

O projeto está estruturado da seguinte maneira:

- **exercicios/para-casa/entregas/maria-julia-lorenzoni/**: Diretório contendo os arquivos principais do projeto. 
  - **produtoEcologico.ts**: Interface base para todos os produtos ecológicos.
  - **itemDecoracaoSustentavel.ts**: Classe que representa itens de decoração sustentáveis, implementando a interface `ProdutoEcologico`.
  - **alimentoOrganico.ts**: Classe que representa alimentos orgânicos, implementando a interface `ProdutoEcologico`.
  - **produtoLimpezaBiodegradavel.ts**: Classe que representa produtos de limpeza biodegradáveis, implementando a interface `ProdutoEcologico`.
  - **index.ts**: Arquivo principal que contém a lógica da interface de linha de comando e o gerenciamento dos produtos.

## Detalhes da implementação

Utilizei o módulo `readline` do Node.js para criar uma interface de linha de comando interativa. O `readline` permite que façamos perguntas ao usuário e capturemos suas respostas, proporcionando uma maneira simples e eficaz de interagir com o programa através do terminal. 

Adicionei alguns itens no sistema, então o mercadinho já tem 9 itens implementados no seu sistema. 

É possível visualizar, adicionar e excluir produtos do sistema.




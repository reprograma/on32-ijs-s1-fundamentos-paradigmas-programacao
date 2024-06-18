# Exercício de Sala 🏫  

## Exercício 1

- Explicação do exercício1: 
Exercício: Criando Interfaces e Implementando Classes
Enunciado
Crie uma interface chamada Veiculo que tenha as seguintes propriedades e métodos:

- marca: uma string que representa a marca do veículo.
- modelo: uma string que representa o modelo do veículo.
- ano: um número que representa o ano de fabricação do veículo.
- exibirInformacoes(): um método que não recebe parâmetros e retorna uma string com as informações do veículo no formato:
``
"Marca: {marca},
Modelo: {modelo},
Ano: {ano}".
``

Em seguida, crie uma classe chamada Carro que implemente a interface Veiculo. A classe deve possuir um construtor para inicializar as propriedades marca, modelo e ano.

Por fim, crie uma instância da classe Carro e chame o método exibirInformacoes(), exibindo o resultado no console.


## Exercício 2 

Explicação do Exercício 2: Implementando uma Conta Bancária com Interface e Classe

Neste exercício, você deverá implementar uma interface e uma classe para representar uma conta bancária. 

A interface ContaBancaria define os métodos essenciais para manipulação do saldo de uma conta, e a classe ContaCorrente implementa essa interface, proporcionando a funcionalidade de depósito e saque.

Tarefas
Defina a Interface ContaBancaria

```lua
___________________________          ___________________________
|        ContaBancaria      |        |         ContaCorrente      |
|---------------------------|        |---------------------------|
| + saldo: number           |        | + saldo: number           |
|---------------------------|        |---------------------------|
| + depositar(valor: number)|        | + depositar(valor: number)|
| + sacar(valor: number)    |        | + sacar(valor: number)    |
 ---------------------------           ---------------------------
```

A classe ContaCorrente deve implementar a interface ContaBancaria.
Construtor:
Deve aceitar um valor inicial para o saldo da conta.
Métodos:
depositar(valor: number): Adiciona o valor ao saldo.
sacar(valor: number): Subtrai o valor do saldo se houver saldo suficiente; caso contrário, exibe uma mensagem de "Saldo insuficiente".

Teste a Implementação

Crie uma instância da classe ContaCorrente com um saldo inicial de 1000.

Exiba o saldo inicial no console.

Deposite 500 na conta e exiba o saldo atualizado.

Saque 200 da conta e exiba o saldo atualizado.

Tente sacar um valor maior que o saldo disponível para verificar se a mensagem de "Saldo insuficiente" é exibida corretamente.

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [X] Fiz o fork do repositório.
- [X] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Resolvi o exercício dentro da pasta resolução.
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)

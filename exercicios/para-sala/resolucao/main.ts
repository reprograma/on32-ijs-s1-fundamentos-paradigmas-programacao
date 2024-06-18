import Carro from './carro';
import ContaCorrente from './contaCorrente';

// Exercício 1
const auto = new Carro("Fusca", "VW", 2024);
console.log(auto.exibirInformacoes());


// Exercício 2
const myAccount = new ContaCorrente(1000);
console.log(myAccount.saldo);

myAccount.depositar(500);
console.log(myAccount.saldo);

myAccount.sacar(200);
console.log(myAccount.saldo);

myAccount.sacar(2000);

import { ContaBancaria } from "./contaBancaria";


class ContaCorrente implements ContaBancaria {
 saldo: number;
 constructor(saldoInicial: number) {
 this.saldo = saldoInicial;
 }
 depositar(valor: number) {
  this.saldo += valor;
  }
  
  sacar(valor: number) {
  if (valor > this.saldo) {
  console.log("Saldo insuficiente");
  } else {
    this.saldo -= valor;
}
}
}

const conta = new ContaCorrente(100);
conta.depositar(100);
conta.sacar(50);
console.log(conta.saldo); // 150
conta.sacar(200); // Saldo insuficiente

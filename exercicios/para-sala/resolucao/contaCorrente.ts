import { contaBancaria } from "./contaBancaria";

class ContaCorrente implements contaBancaria {
  saldo: number;

  constructor(saldoInicial: number){
   this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
   this.saldo += valor;
  }

  sacar(valor: number): void {
   if(valor > this.saldo){
     console.log('saldo insuficiente')
   } else {
    this.saldo -= valor;
   }
  }
}

const conta = new ContaCorrente(1000);

console.log("Saldo Inicial", conta.saldo);

conta.depositar(500);
conta.sacar(200);

console.log("saldo", conta.saldo);

conta.sacar(1400);
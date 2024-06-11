import {ContaBancaria} from "./ContaBancaria";

class ContaCorrente implements ContaBancaria {
  saldo:number

  constructor(saldoInicial:number) {
    this.saldo = saldoInicial;
  }

  depositar(valor:number){
    this.saldo += valor;
  }

  sacar(valor:number){
    if(valor > this.saldo){
    console.log("Saldo Insuficiente");
    }else{
      this.saldo -= valor;
    }
  }
}

const conta = new ContaCorrente(1000);
console.log(conta.saldo)
conta.depositar(500);
console.log(conta.saldo)
conta.sacar(2000);

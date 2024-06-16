import { ContaBancaria } from "./contaBancaria.interface"

export class ContaCorrente implements ContaBancaria {
  saldo: number

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial
  }

  depositar(valor: number) {
    this.saldo += valor
  }

  sacar(valor: number) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente")
    } else {
      this.saldo -= valor
    }
  }
}

const conta = new ContaCorrente(1000)
conta.depositar(800)
conta.sacar(800000)
console.log(conta)

conta.sacar(1600)
console.log("Saldo após saque: ", conta.saldo)

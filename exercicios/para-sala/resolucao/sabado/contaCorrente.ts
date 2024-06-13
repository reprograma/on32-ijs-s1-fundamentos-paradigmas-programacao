import { ContaBancaria } from "./contaBancaria";

class ContaCorrente implements ContaBancaria {
    saldo: number

    constructor(saldoInicial:number) {
        this.saldo = saldoInicial      
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

    sacar (valor: number) {
        if (valor > this.saldo){
            console.log ("Saldo insuficiente")
        } else {
            this.saldo -= valor
        }
    }
}

const conta = new ContaCorrente(1000);
console.log ("Saldo Inicial", conta.saldo)

conta.depositar(500);
console.log("Saldo após depósito", conta.saldo)

conta.sacar(200);
console.log("Saldo após saque", conta.saldo)

conta.sacar(1301);
console.log("Saldo após saque", conta.saldo)
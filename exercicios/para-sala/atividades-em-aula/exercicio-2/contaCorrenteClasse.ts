//Classe

import { ContaBancaria } from "./contaBancariaInterface";

class ContaCorrente implements ContaBancaria {
    saldo: number;

    constructor(saldoInicial: number){
        this.saldo = saldoInicial;
    }

    deposiar(valor: number){
        this.saldo += valor;
    }

    sacar(valor: number){
        if (valor > this.saldo){
            console.log("Saldo Insuficiente")
        } else {
            this.saldo -= valor
        }
    }
}

const conta = new ContaCorrente(1000)
console.log("Saldo Inicial", conta.saldo)

conta.deposiar(500)
console.log("Saldo após o depósito", conta.saldo)

conta.sacar(200)
console.log("Saldo após o saque", conta.saldo)

conta.sacar(1500)
console.log("Saldo após o saque", conta.saldo)
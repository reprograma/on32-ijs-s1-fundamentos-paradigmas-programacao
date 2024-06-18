import { ContaBancaria } from "./contaBancaria";

class ContaCorrente implements ContaBancaria {
    saldo:number;

    constructor(saldoInicial:number){
        this.saldo = saldoInicial
        console.log(`Saldo inicial: ${this.saldo}`)
    }

    depositar(valor: number) {
        this.saldo += valor;
        console.log(`Saldo após depósito de ${valor}: ${this.saldo}`)
    }

    sacar(valor: number) {
        if (valor > this.saldo){
            console.log("Saldo insuficiente")
        }else{
            this.saldo -= valor
            console.log(`Saldo após saque de ${valor}: ${this.saldo}`)
        }
    }
        
}

const conta = new ContaCorrente(1000);

conta.depositar(500);

conta.sacar(200);

conta.sacar(1400);
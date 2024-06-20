import { ContaBancaria } from "./contaBancaria";

class ContaCorrente implements ContaBancaria{
    saldo:number;
    constructor(saldoInicial:number){
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if(valor > this.saldo){
            console.log("Saldo indisponível")
        }else{
            this.saldo -= valor
        }
    }
}

const conta = new ContaCorrente(1000);
conta.depositar(500)
conta.sacar(50)
console.log("Saldo Inicial", conta.saldo)
console.log("Saldo Adicionado", conta.saldo)
console.log("saldo apos o saque", conta.saldo)

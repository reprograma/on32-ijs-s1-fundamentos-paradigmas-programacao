import ContaBancaria from './models/interface/contaBancaria';

export default class ContaCorrente implements ContaBancaria {
    saldo:number;

    constructor(saldoInicial:number){
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        valor > this.saldo ? console.log("Saldo insuficiente!") : this.saldo -= valor;
    }
}

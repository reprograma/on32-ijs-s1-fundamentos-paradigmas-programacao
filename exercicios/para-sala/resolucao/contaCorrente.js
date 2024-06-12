"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaCorrente {
    constructor(saldoInical) {
        this.saldo = saldoInical;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo Insufiente");
        }
        else {
            this.saldo -= valor;
        }
    }
}
const conta = new ContaCorrente(1000);
console.log("Saldo Inicial", conta.saldo);
conta.depositar(500);
console.log("Saldo após deposito", conta.saldo);
conta.sacar(200);
console.log("saldo após o saque", conta.saldo);
conta.sacar(1301);
console.log("saldo após o saque", conta.saldo);
//# sourceMappingURL=contaCorrente.js.map
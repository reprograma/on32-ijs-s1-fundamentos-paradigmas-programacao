import { ContaBancaria } from "./contaBancaria";

class ContaCorrente implements ContaBancaria {
    saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial
    }
    // criar método depositar e método depositar pedido no README

    // sempre que chamar esse método com valor dentro, esse valor precisar ser adicionado no saldo 
    depositar(valor: number) {
        // sempre que o deposito acontecer o valor será adicionado ao nosso valor de saldo inicial
        this.saldo += valor
    }

    // ter que criar uma lógica caso não tenha o valor que precisamos sacar na conta
    sacar(valor: number) {
        if (valor > this.saldo) {
            console.log("Saldo Insuficiente")
        } else {
            this.saldo -= valor
        }
    }
}

const conta = new ContaCorrente(1000);
console.log("Saldo Inicial", conta.saldo)

conta.depositar(500)
console.log("Saldo após deposito", conta.saldo)

conta.sacar(200)
console.log("Saldo após o saque", conta.saldo)

conta.sacar(1301) // vai aparecer a informação inserida no if
console.log("Saldo após o saque", conta.saldo)
export interface contaBancaria {
    saldo:number;
    depositar(valor:number):void
    sacar(valor:number):void
}
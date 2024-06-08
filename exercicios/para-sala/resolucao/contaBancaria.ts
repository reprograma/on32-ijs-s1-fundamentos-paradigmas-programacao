export interface ContaBancaria{
    saldo:number;
    depositar(valor:number):void // Void quer dizer que a função não tem retorno
    sacar(valor:number):void
}
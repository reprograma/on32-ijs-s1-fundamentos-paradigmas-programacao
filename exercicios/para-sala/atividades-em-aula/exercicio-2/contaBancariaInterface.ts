//Interface

export interface ContaBancaria {
    saldo: number;
    deposiar(valor:number):void;
    sacar(valor:number):void
}
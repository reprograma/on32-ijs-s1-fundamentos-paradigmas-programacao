// é necessário usar a palavra "export" para disponibiçizar a interface ao outro arquivo.
export interface ContaBancaria {
    saldo:number;
    depositar(valor:number):void //método
    sacar(valor:number):void //método
}

// void: indica a ausência de retorno de valores.
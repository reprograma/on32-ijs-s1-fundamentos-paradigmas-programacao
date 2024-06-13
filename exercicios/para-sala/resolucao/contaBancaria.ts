
export interface ContaBancaria {
    saldo:number;
    depositar(valor:number):void; // método
    sacar(valor:number):void // método
}

// void é pra ter um retorno explícito. Não vai usar mais nenhum dado. Ponto final. Não tem um retorno.
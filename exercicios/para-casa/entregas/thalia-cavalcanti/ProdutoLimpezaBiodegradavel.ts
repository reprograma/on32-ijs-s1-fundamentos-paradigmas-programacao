import { ProdutoEcologico } from "./ProdutoEcologico"

export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string
    preco: number
    volume: number
    
    constructor(nome: string, preco: number, volume: number){
        this.nome = nome
        this.preco = preco
        this.volume = volume
    }
}
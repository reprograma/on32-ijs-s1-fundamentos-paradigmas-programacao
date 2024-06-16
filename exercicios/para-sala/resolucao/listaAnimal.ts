import { Animal } from "./animal.interface"

class Cachorro implements Animal {
  nome: string
  idade: number
  raca: string

  constructor(nome: string, idade: number, raca: string) {
    this.nome = nome
    this.idade = idade
    this.raca = raca
  }

  som(): void {
    console.log("O cachorro faz: Au au au 🐶 \n")
  }
}

class Gato implements Animal {
  nome: string
  idade: number
  cor: string

  constructor(nome: string, idade: number, cor: string) {
    this.nome = nome
    this.idade = idade
    this.cor = cor
  }

  som(): void {
    console.log("O gato faz: Miau miau miau 🐱 \n")
  }
}

class Pato implements Animal {
  nome: string
  idade: number
  cor: string

  constructor(nome: string, idade: number, cor: string) {
    this.nome = nome
    this.idade = idade
    this.cor = cor
  }

  som(): void {
    console.log("O pato faz: Quack quack quack 🦆 \n")
  }
}

const meuCachorro = new Cachorro("Duque", 3, "Vira-latinha caramelo")
console.log(`Nome: ${meuCachorro.nome}\nIdade: ${meuCachorro.idade}\nRaça: ${meuCachorro.raca}`)
meuCachorro.som()

const meuGato = new Gato("Aava", 4, "Branca, cinza e marrom")
console.log(`Nome: ${meuGato.nome}\nIdade: ${meuGato.idade}\nCor: ${meuGato.cor}`)
meuGato.som()

const meuPato = new Pato("Tio Patinhas", 1, "branco")
console.log(`Nome: ${meuPato.nome}\nIdade: ${meuPato.idade}\nCor: ${meuPato.cor}`)
meuPato.som()

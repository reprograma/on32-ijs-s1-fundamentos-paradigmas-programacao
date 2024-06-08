interface Veiculo {
 marca: string;
 modelo: string;
 ano: number;
 exibirInformacoes():string
}

class Carro implements Veiculo{
 marca: string;
 modelo: string;
 ano: number;

 constructor(marca: string, modelo: string, ano: number){
   this.marca = marca;
   this.modelo = modelo;
   this.ano = ano;
 }

 exibirInformacoes(): string {
  return `A marca do carro é ${this.marca}, o modelo é ${this.modelo} e é do ano ${this.ano}`
 }
}

const myCarro = new Carro('nissan', 'kicks', 2004);
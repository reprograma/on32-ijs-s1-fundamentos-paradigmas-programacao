import Animal from "./models/interface/animal";

class Cachorro implements Animal {

    constructor(public nome:string, public idade:number, public raca:string){ }

    som(){
        console.log("au au au");
    }
}

const dog = new Cachorro("Banje", 4, "shih tzu");
dog.som();
console.log(`Nome: ${dog.nome}`);
console.log(`Idade: ${dog.idade}`);
console.log(`Raça: ${dog.raca}`);

class Gato implements Animal {

    constructor(public nome:string, public idade:number, public cor:string){
    }

    som(){
        console.log("miaaau...");
    }
}

const cat = new Gato("Paulinho", 1, "Preto");
cat.som();
console.log(`Nome: ${cat.nome}`);
console.log(`Idade: ${cat.idade}`);
console.log(`Cor: ${cat.cor}`);
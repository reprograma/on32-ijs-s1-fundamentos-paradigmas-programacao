interface EcologicalProduct {
    name: string;
    price: number;
}

class OrganicFood implements EcologicalProduct {
    name: string;
    price: number;
    expirationDate: Date;
    ingredients: string[];

    constructor(name: string, price: number, expirationDate: Date, ingredients: string[]) {
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;
        this.ingredients = ingredients;
    }

}

class BiodegradableCleaningProduct implements EcologicalProduct {
    name: string;
    price: number;
    volume: number;

    constructor(name: string, price: number, volume: number) {
        this.name = name;
        this.price = price;
        this.volume = volume;
    }
}

class DecorationItemSustainable implements EcologicalProduct {
    name: string;
    price: number;
    material: string;
    dimensions: { width: number; height: number; depth: number; }

    constructor(name: string, price: number, material: string, dimensions: { width: number, height: number, depth: number }) {
        this.name = name;
        this.price = price;
        this.material = material;
        this.dimensions = dimensions;
    }
}
// Teste do código
const watermelon = new OrganicFood("Watermelon", 10.00, new Date("2024-06-06"), ["Watermelon"]);
console.log("Organic Food:", watermelon);

const homemadeStoneSoap = new BiodegradableCleaningProduct("Homemade stone soap", 3.25, 10);
console.log("Biodegradable Cleaning Product:", homemadeStoneSoap);

const sustainableVase = new DecorationItemSustainable("Sustainable Vase", 29.99, "Recycled Ceramic", { width: 20, height: 30, depth: 20 });
console.log("Sustainable Decoration Item:", sustainableVase);
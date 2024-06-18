import Cachorro from "./Models/Cachorro";
import Gato from "./Models/Gato";

const nelsinho = new Cachorro('Nelsinho da silva', 0.5, 'Fila')
nelsinho.emitirSom()

const dino = new Gato('Dino da Silva', 2, 'Laranja')
dino.emitirSom()

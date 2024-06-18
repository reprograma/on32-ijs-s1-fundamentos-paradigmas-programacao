import { Alimentos } from "./produtos/produtos.alimentos";
import { Limpeza } from "./produtos/produtos.limpeza";
import { Utilidade } from "./produtos/produtos.utilidade";

let cereais: Alimentos[] = [] 
let produtoDeLimpeza: Limpeza[] = []
let utilidades: Utilidade [] = []

cereais.push(new Alimentos("granola", "grãos para pôr no iogurte"));
produtoDeLimpeza.push(new Limpeza("esponjas vegetais", "kit com 3 esponjas de banho"));
utilidades.push(new Utilidade("ecobag", "bolsa de pano pintada à mão"));

console.table(cereais);
console.table(produtoDeLimpeza);
console.table(utilidades);
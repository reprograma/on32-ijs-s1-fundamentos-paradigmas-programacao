// Exercício 4: Sistema de Gerenciamento de Animais
// Enunciado
// Você está desenvolvendo um sistema de gerenciamento de animais que pode incluir diferentes tipos de animais. Todos os animais devem ter as seguintes propriedades e métodos:

// Propriedade nome do tipo string.
// Propriedade idade do tipo number.
// Método som que não retorna nada (void).
// Crie uma interface Animal para definir essas propriedades e métodos. Em seguida, crie uma classe Cachorro que implemente a interface Animal com as seguintes especificações:

// Propriedade adicional raca do tipo string.
// O método som deve imprimir a mensagem "O cachorro faz: Au Au".
// Depois, crie uma classe Gato que implemente a interface Animal com as seguintes especificações:

// Propriedade adicional cor do tipo string.
// O método som deve imprimir a mensagem "O gato faz: Miau".
// Por fim, crie objetos das classes Cachorro e Gato, defina suas propriedades e chame o método som.


export interface animal {
    nome:string;
    idade: number;
    som():void
}
// Exercício 3: Sistema de Biblioteca
// Enunciado
// Você está criando um sistema para gerenciar livros em uma biblioteca. Todos os livros devem ter as seguintes propriedades e métodos:

// Propriedade titulo do tipo string.
// Propriedade autor do tipo string.
// Método detalhes que retorna uma string com o título e o autor do livro.
// Crie uma interface Livro para definir essas propriedades e métodos. Em seguida, crie uma classe LivroDigital que implemente a interface Livro com as seguintes especificações:

// Propriedade adicional formato do tipo string (por exemplo, "PDF", "EPUB").
// O método detalhes deve retornar uma string no formato "Título: [titulo], Autor: [autor], Formato: [formato]".
// Por fim, crie um objeto da classe LivroDigital, defina suas propriedades e chame o método detalhes.

export interface livro {

    titulo: string;
    autor: string;
    detalhe(): string
}
# Paradigmas
Princípios e conceitos que sustentam diversos estilos de códigos e resolução de problemas na programação.

# Programação imperativa: 
Descrição passo a passo das operações de um programa, dizendo ao computador exatamente o que ele deve fazer. A linguagem imperativa foi originada da linguagem rudimentar de máquina, onde, no início da era de computação, as instruções eram passadas para os computadores através da linguagem de máquina. A programação imperativa não possui precisão de resultados.

# Programação funcional: 
Tem o foco de construir softwares utilizando funções puras, é voltado para cálculos matemáticos e iniciações cientificas e não possui variáveis ou laços de repetição. Não reutiliza dados, tendo a necessidade de sempre cria-los.

# Programação lógico: 
baseia-se na matemática e raciocínio dedutivo para resolver problemas. Na programação lógica, se tem o uso de true e false para validação.

# Programação Baseada em Eventos: 
O fluxo do programa é determinado por eventos externos, ou seja, permanece inativo até a interferência externa recaia sobre ele. O programa responde utilizando funções associadas ao evento.

# Paradigma Orientado a Objetos: 
Forma melhorada para organização e estruturação das aplicações. Nele, os programas são estruturados em torno de entidades chamadas de “objetos”, que representam diferentes elementos do sistema, interagindo entre si de forma organizada e estruturada. As características da POO são:
a.	Abstração
b.	Herança
c.	Encapsulamento

# Objetos
•	Material ou abstrato que pode ser percebido pelos sentidos e descritos por meio de suas características, comportamentos e estado atual.

# Classe
•	É um molde ou estrutura que define o objeto. Ela especifica os dados e os comportamentos que o os objetos daquele tipo terão.
    Coisas que eu tenho? --> Atributos
    Coisas que eu faço? --> Métodos
    Como estou agora? --> Estado

## Canetas
Atributos de uma caneta (coisas que ela tem)
•	Modelo
•	Ponta
•	Cor
•	Carga
•	Tampada

Métodos de uma caneta (Coisas que ela pode fazer)
•	Escrever
•	Pintar
•	Destampar
•	Tampar

Estado de uma caneta (Como ela está atualmente)
•	50% carga
•	Ponta fina
•	Destampada
•	Escrevendo
•	Tem a cor azul

•	Para instanciar um objeto: nomeObjeto = new Caneta

# Tipagem estática e dinâmica
•	Tipagem estática: O tipo é conhecido e verificado pelo compilador em tempo de compilação, ou seja, se eu declaro uma variável como inteira e armazeno valor string, o código verificará e apontará o erro antes da execução. As linguagens que utilizam esse tipo de tipagem necessitam da declaração do tipo de dado que será armazenado, exemplo:
	    Int num = 10; (Java)   let nome: string = “Reprograma” (typescript)
	    Nos dois exemplos, declaramos o tipo de dado que a variável recebe.

•	Tipagem dinâmica: O tipo é conhecido e verificado pelo compilador apenas em tempo de execução, ou seja, podemos colocar qualquer valor que o código executará sem erros. As linguagens que utilizam esse tipo de tipagem não necessitam da declaração do tipo de dado que será armazenado exemplo:
	Numero = 10 (python)
 

# Tipagem forte e fraca:
__Tipagem forte:__ A linguagem não permite que tipos diferentes de variáveis sejam implicitamente convertidos entre si. Ou seja, operações entre tipos incompatíveis resultam erros.
__Tipagem fraca:__ A linguagem permite que tipos diferentes de variáveis sejam implicitamente convertidos entre si. Ou seja, operações entre tipos incompatíveis são aceitos e as conversões automáticas são feitas.
 
__Instalação do typescript e clonagem de repositório:__
•	Git clone linkdorepositorio
•	Npm init -y
•	Npm install
•	Npm install -g typescript
•	Tsc –version
•	Tsc –init
•	npm install -g ts-node (para rodar arquivos .ts)

# Typescript
•	A linguagem é estática opcional, ou seja, não precisa da declaração do tipo de variável. Porém, é uma boa prática a tipagem estática nas variáveis.
•	Superset de JS --> Possui a base em JavaScript, porém, possui funcionalidades adicionais que melhoram a capacidade de desenvolvimento.

import * as readline from 'readline';
import { ItemDecoracaoSustentavel } from './itemDecoracaoSustentavel';
import { AlimentoOrganico } from './alimentoOrganico';
import { ProdutoLimpezaBiodegradavel } from './produtoLimpezaBiodegradavel';
import { ProdutoEcologico } from './produtoEcologico';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const produtos: ProdutoEcologico[] = [];

//Produtos base do mercadinho
const detergenteBiodegradavel = new ProdutoLimpezaBiodegradavel('Detergente Biodegradável', 5.99, 500);
const sabaoEmBarraBiodegradavel = new ProdutoLimpezaBiodegradavel('Sabão em Barra Biodegradável', 12.00, 200);
const limpaVidrosBiodegradavel = new ProdutoLimpezaBiodegradavel('Limpa Vidros Biodegradável', 8.50, 500);

const quadroDecorativo = new ItemDecoracaoSustentavel('Quadro Decorativo', 45.99, 'Madeira', { largura: 30, altura: 40, profundidade: 2 });
const luminariaDecorativa = new ItemDecoracaoSustentavel('Luminária de papel reciclado', 80.00, 'Papel reciclado', { largura: 30, altura: 30, profundidade: 30 });
const tapeteFibrasNaturais = new ItemDecoracaoSustentavel('Tapete de Fibras Naturais', 120.00, ' Fibra de coco', { largura: 100, altura: 150, profundidade: 1 });

const arrozIntegral = new AlimentoOrganico('Arroz Integral Orgânico', 5.00, new Date('2024-08-31'), ['Arroz integral cultivado sem agrotóxicos']);
const tomatesOrganicos = new AlimentoOrganico('Tomates Orgânicos', 8.00, new Date('2024-06-25'), ['Tomates cultivados sem agrotóxicos']);
const paoIntegralOrgânico = new AlimentoOrganico('Pão Integral Orgânico', 4.50, new Date('2024-06-22'), ['Farinha integral orgânica, fermento natural, sal marinho']);

produtos.push(detergenteBiodegradavel, sabaoEmBarraBiodegradavel, limpaVidrosBiodegradavel, quadroDecorativo, luminariaDecorativa, tapeteFibrasNaturais, arrozIntegral, tomatesOrganicos, paoIntegralOrgânico);

function perguntarCadastro(){
  rl.question(`"
    ╔═════════════════════════════════════════╗
    ║    Escolha o Produto a Ser Cadastrado   ║
    ╠═════════════════════════════════════════╣
    ║ 1 - Item de Decoração Sustentável       ║
    ║ 2 - Alimento Orgânico                   ║
    ║ 3 - Produto de Limpeza Biodegradável    ║
    ╚═════════════════════════════════════════╝
    Escolha uma opção: `, (resposta) => {

      switch(resposta){
      case '1':
        cadastrarItemDecoracaoSustentavel();
        break;
      case '2':
        cadastrarAlimentoOrganico();
        break;
      case '3':
        cadastrarProdutoLimpezaBiodegradavel();
        break;
      default:
        console.log('Opção inválida');
        perguntarCadastro();
    }
  });
}

function cadastrarItemDecoracaoSustentavel() {
  rl.question('Nome: ', (nome) => {
    rl.question('Preço: ', (preco) => {
      rl.question('Material: ', (material) => {
        rl.question('Dimensões (largura altura profundidade): ', (dimensoes) => {
          const [largura, altura, profundidade] = dimensoes.split(' ').map(Number);
          const item = new ItemDecoracaoSustentavel(nome, parseFloat(preco), material, { largura, altura, profundidade });
          produtos.push(item);
          console.log('Item de Decoração Sustentável cadastrado com sucesso!');
          perguntarProximaAcao();
        });
      });
    });
  });
}

function cadastrarAlimentoOrganico() {
  rl.question('Nome: ', (nome) => {
    rl.question('Preço: ', (preco) => {
      rl.question('Data de Validade (YYYY-MM-DD): ', (dataValidade) => {
        rl.question('Ingredientes (separados por vírgula): ', (ingredientes) => {
          const alimento = new AlimentoOrganico(nome, parseFloat(preco), new Date(dataValidade), ingredientes.split(','));
          produtos.push(alimento);
          console.log('Alimento Orgânico cadastrado com sucesso!');
          perguntarProximaAcao();
        });
      });
    });
  });
}

function cadastrarProdutoLimpezaBiodegradavel() {
  rl.question('Nome: ', (nome) => {
    rl.question('Preço: ', (preco) => {
      rl.question('Volume (em ml): ', (volume) => {
        const produto = new ProdutoLimpezaBiodegradavel(nome, parseFloat(preco), parseFloat(volume));
        produtos.push(produto);
        console.log('Produto de Limpeza Biodegradável cadastrado com sucesso!');
        perguntarProximaAcao();
      });
    });
  });
}

function visualizarProdutos(callback?: () => void) {
  if (produtos.length === 0) {
    console.log('Nenhum produto cadastrado.');
  } else {
    produtos.forEach((produto, index) => {
      console.log(`${index + 1}. ${produto.nome} - R$${produto.preco}`);
    });
  }
  if (callback) {
    callback();
  } else {
    perguntarProximaAcao();
  }
}

function excluirProduto() {
  rl.question('Digite o número do produto que deseja excluir: ', (resposta) => {
    const index = parseInt(resposta) - 1;
    if (isNaN(index) || index < 0 || index >= produtos.length) {
      console.log('Número inválido');
    } else {
      const produtoExcluido = produtos.splice(index, 1)[0];
      console.log(`${produtoExcluido.nome} excluído com sucesso!`);
    }
    perguntarProximaAcao();
  });
}



function perguntarProximaAcao(){
  rl.question(`
    ╔════════════════════════════╗
    ║      Menu de Opções        ║
    ╠════════════════════════════╣
    ║ 1 - Cadastrar Produto      ║
    ║ 2 - Exibir Produtos        ║
    ║ 3 - Excluir Produto        ║
    ║ 4 - Sair                   ║
    ╚════════════════════════════╝
    Escolha uma opção: `, (resposta) => {
      switch(resposta){
      case '1':
        perguntarCadastro();
        break;
      case '2':
        visualizarProdutos();
        break;
      case '3':
        visualizarProdutos(excluirProduto);
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Opção inválida');
        perguntarProximaAcao();
    }
  });
}

console.log('Bem-vindo ao sistema de gerenciamento do Mercadinho Ecológico!');
perguntarProximaAcao();
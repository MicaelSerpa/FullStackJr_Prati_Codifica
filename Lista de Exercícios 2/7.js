const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const produtos = [];

function perguntarProduto() {
  rl.question('Digite o nome do produto (ou "fim" para terminar): ', (nome) => {
    if (nome.toLowerCase() === 'fim') {
      const resultado = nomesOrdenadosPorPreco(produtos);
      console.log('Nomes ordenados por preço:', resultado);
      rl.close();
    } else {
      rl.question('Digite o preço do produto: ', (precoInput) => {
        const preco = parseFloat(precoInput);
        produtos.push({ nome, preco });
        perguntarProduto(); // chama novamente para o próximo produto
      });
    }
  });
}

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}

console.log('Digite os produtos e preços. Quando terminar, digite "fim" no nome.');
perguntarProduto();


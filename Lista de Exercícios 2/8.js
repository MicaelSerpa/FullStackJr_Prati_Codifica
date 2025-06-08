const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const vendas = [];

function perguntarVenda() {
  rl.question('Digite o nome do cliente (ou "fim" para terminar): ', (cliente) => {
    if (cliente.toLowerCase() === 'fim') {
      const resultado = agruparPorCliente(vendas);
      console.log('Totais por cliente:', resultado);
      rl.close();
    } else {
      rl.question('Digite o total da venda: ', (totalInput) => {
        const total = parseFloat(totalInput);
        vendas.push({ cliente, total });
        perguntarVenda();  // chama novamente para o próximo registro
      });
    }
  });
}

function agruparPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    if (acc[venda.cliente]) {
      acc[venda.cliente] += venda.total;
    } else {
      acc[venda.cliente] = venda.total;
    }
    return acc;
  }, {});
}

console.log('Digite as vendas (cliente e total). Quando terminar, digite "fim" no nome.');
perguntarVenda();

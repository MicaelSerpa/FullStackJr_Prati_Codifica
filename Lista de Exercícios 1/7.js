const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número de maçãs compradas: ', (input) => {
  const quantidade = parseInt(input);

  if (quantidade > 0) {
    let precoUnitario;

    if (quantidade < 12) {
      precoUnitario = 0.30;
    } else {
      precoUnitario = 0.25;
    }

    const total = quantidade * precoUnitario;

    console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);
  } else {
    console.log('Quantidade inválida. Digite um número positivo.');
  }

  rl.close();
});

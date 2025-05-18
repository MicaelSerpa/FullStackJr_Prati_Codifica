const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número inteiro: ', (input) => {
  const numero = parseInt(input);

  if (!isNaN(numero)) {
    for (let i = 0; i < 10; i++) {
      console.log(numero);
    }
  } else {
    console.log('Valor inválido. Por favor, digite um número inteiro.');
  }

  rl.close();
});

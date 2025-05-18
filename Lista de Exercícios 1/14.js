const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número inteiro não negativo para calcular o fatorial: ', (input) => {
  const num = parseInt(input);

  if (isNaN(num) || num < 0) {
    console.log('Por favor, digite um número inteiro não negativo válido.');
    rl.close();
    return;
  }

  let fatorial = 1;
  for (let i = 2; i <= num; i++) {
    fatorial *= i;
  }

  console.log(`O fatorial de ${num} é: ${fatorial}`);

  rl.close();
});

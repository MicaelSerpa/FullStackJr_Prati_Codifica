const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número para ver a tabuada: ', (input) => {
  const num = parseInt(input);

  if (!isNaN(num)) {
    console.log(`Tabuada de ${num}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  } else {
    console.log('Por favor, digite um número válido.');
  }

  rl.close();
});

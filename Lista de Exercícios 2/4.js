const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fatorial(n) {
  if (n < 0) {
    throw new Error('Não existe fatorial de número negativo!');
  } else if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

rl.question('Digite um número inteiro não negativo: ', (input) => {
  const numero = parseInt(input);

  try {
    const resultado = fatorial(numero);
    console.log(`Fatorial de ${numero} é: ${resultado}`);
  } catch (error) {
    console.log('Erro:', error.message);
  }

  rl.close();
});

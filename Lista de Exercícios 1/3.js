const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite sua nota (0 a 10): ', (input) => {
  const nota = parseFloat(input);

  if (nota >= 0 && nota <= 10) {
    if (nota >= 7) {
      console.log('Aprovado');
    } else if (nota >= 4) {
      console.log('Recuperação');
    } else {
      console.log('Reprovado');
    }
  } else {
    console.log('Nota inválida. Digite um valor entre 0 e 10.');
  }

  rl.close();
});
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Pressione Enter para gerar os primeiros 10 números da sequência de Fibonacci...', () => {
  let a = 0, b = 1;

  console.log('Sequência de Fibonacci:');
  for (let i = 0; i < 10; i++) {
    console.log(a);
    const proximo = a + b;
    a = b;
    b = proximo;
  }

  rl.close();
});

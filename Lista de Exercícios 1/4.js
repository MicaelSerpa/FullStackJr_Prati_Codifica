const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Menu:');
console.log('1 - Dizer Olá');
console.log('2 - Mostrar a data atual');
console.log('3 - Sair');

rl.question('Escolha uma opção (1, 2 ou 3): ', (input) => {
  switch (input) {
    case '1':
      console.log('Olá! Tudo bem?');
      break;
    case '2':
      console.log('Data atual:', new Date().toLocaleString());
      break;
    case '3':
      console.log('Saindo... Até mais!');
      break;
    default:
      console.log('Opção inválida. Por favor, escolha 1, 2 ou 3.');
  }

  rl.close();
});

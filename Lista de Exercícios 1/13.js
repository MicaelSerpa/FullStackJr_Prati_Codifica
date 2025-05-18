const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let soma = 0;
let count = 0;

function pedirNumero() {
  rl.question('Digite um número decimal (0 para encerrar): ', (input) => {
    const num = parseFloat(input);

    if (isNaN(num)) {
      console.log('Valor inválido. Digite um número decimal.');
      pedirNumero();
    } else if (num === 0) {
      if (count === 0) {
        console.log('Nenhum número válido foi digitado para calcular a média.');
      } else {
        const media = soma / count;
        console.log(`Média aritmética dos números digitados: ${media.toFixed(2)}`);
      }
      rl.close();
    } else {
      soma += num;
      count++;
      pedirNumero();
    }
  });
}

pedirNumero();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let soma = 0;
let contador = 0;

function pedirNumero() {
  if (contador < 5) {
    rl.question(`Digite o número ${contador + 1}: `, (input) => {
      const num = parseFloat(input);
      if (!isNaN(num)) {
        soma += num;
        contador++;
        pedirNumero(); // pede o próximo número
      } else {
        console.log('Por favor, digite um número válido.');
        pedirNumero(); // repete a pergunta
      }
    });
  } else {
    console.log(`A soma total dos 5 números é: ${soma}`);
    rl.close();
  }
}

pedirNumero();

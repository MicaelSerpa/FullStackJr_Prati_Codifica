const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function pedirPalpite() {
  rl.question('Adivinhe o número (entre 1 e 100): ', (palpiteInput) => {
    const palpite = parseInt(palpiteInput);
    tentativas++;

    if (palpite === numeroSecreto) {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
      rl.close();
    } else if (palpite < numeroSecreto) {
      console.log('Mais alto!');
      pedirPalpite();
    } else if (palpite > numeroSecreto) {
      console.log('Mais baixo!');
      pedirPalpite();
    } else {
      console.log('Por favor, digite um número válido.');
      pedirPalpite();
    }
  });
}

// Iniciar o jogo
pedirPalpite();

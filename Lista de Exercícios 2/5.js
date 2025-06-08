const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

function minhaFuncao() {
  console.log('Função executada!');
}

rl.question('Digite o delay em milissegundos: ', (inputDelay) => {
  const delay = parseInt(inputDelay);
  const funcaoDebounce = debounce(minhaFuncao, delay);

  // Simulando chamadas rápidas
  funcaoDebounce();
  funcaoDebounce();
  funcaoDebounce();

  console.log(`A função será executada após ${delay} ms da última chamada.`);

  rl.close();
});

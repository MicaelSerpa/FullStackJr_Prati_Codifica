const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro valor: ', (input1) => {
  const valor1 = parseFloat(input1);

  rl.question('Digite o segundo valor (diferente do primeiro): ', (input2) => {
    const valor2 = parseFloat(input2);

    if (valor1 === valor2) {
      console.log('Os valores não podem ser iguais.');
    } else if (valor1 < valor2) {
      console.log(`Ordem crescente: ${valor1}, ${valor2}`);
    } else {
      console.log(`Ordem crescente: ${valor2}, ${valor1}`);
    }

    rl.close();
  });
});

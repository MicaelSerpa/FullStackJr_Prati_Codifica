const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu peso em kg: ', (pesoInput) => {
  const peso = parseFloat(pesoInput);

  rl.question('Digite sua altura em metros (ex: 1.75): ', (alturaInput) => {
    const altura = parseFloat(alturaInput);

    if (peso > 0 && altura > 0) {
      const imc = peso / (altura * altura);
      console.log(`Seu IMC é: ${imc.toFixed(2)}`);

      if (imc < 18.5) {
        console.log('Categoria: Baixo peso');
      } else if (imc < 25) {
        console.log('Categoria: Peso normal');
      } else if (imc < 30) {
        console.log('Categoria: Sobrepeso');
      } else {
        console.log('Categoria: Obesidade');
      }
    } else {
      console.log('Peso ou altura inválidos. Por favor, digite valores positivos.');
    }

    rl.close();
  });
});
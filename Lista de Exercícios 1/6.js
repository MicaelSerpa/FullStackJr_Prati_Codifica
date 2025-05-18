const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o lado A: ', (aInput) => {
  const A = parseFloat(aInput);

  rl.question('Digite o lado B: ', (bInput) => {
    const B = parseFloat(bInput);

    rl.question('Digite o lado C: ', (cInput) => {
      const C = parseFloat(cInput);

      if (A <= 0 || B <= 0 || C <= 0) {
        console.log('Os lados devem ser maiores que zero.');
        rl.close();
        return;
      }

      // Verifica se forma triângulo
      if (A < B + C && B < A + C && C < A + B) {
        // Classifica o triângulo
        if (A === B && B === C) {
          console.log('Triângulo Equilátero');
        } else if (A === B || A === C || B === C) {
          console.log('Triângulo Isósceles');
        } else {
          console.log('Triângulo Escaleno');
        }
      } else {
        console.log('Os lados fornecidos NÃO formam um triângulo.');
      }

      rl.close();
    });
  });
});

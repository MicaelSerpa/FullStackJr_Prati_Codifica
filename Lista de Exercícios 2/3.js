const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma frase: ', (frase) => {
  const palavras = frase.split(' ');
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    let encontrada = false;

    // Verifica se a palavra já está no array de únicas
    for (let j = 0; j < unicas.length; j++) {
      if (palavras[i] === unicas[j]) {
        encontrada = true;
        break;
      }
    }

    if (!encontrada) {
      unicas.push(palavras[i]);
    }
  }

  console.log('Palavras únicas:', unicas);

  rl.close();
});

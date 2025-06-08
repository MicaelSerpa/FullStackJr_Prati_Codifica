const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ehBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function ehDataValida(dia, mes, ano) {
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
    return false;
  }

  const diasNoMes = [31, (ehBissexto(ano) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return dia <= diasNoMes[mes - 1];
}

// Entrada de dados
rl.question('Digite o dia: ', (diaInput) => {
  rl.question('Digite o mês: ', (mesInput) => {
    rl.question('Digite o ano: ', (anoInput) => {
      const dia = parseInt(diaInput);
      const mes = parseInt(mesInput);
      const ano = parseInt(anoInput);

      if (ehDataValida(dia, mes, ano)) {
        console.log('Data válida!');
      } else {
        console.log('Data inválida!');
      }

      rl.close();
    });
  });
});

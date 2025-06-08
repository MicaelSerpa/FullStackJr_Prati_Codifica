const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que converte array de pares para objeto
function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

// Função que converte objeto para array de pares
function objetoParaPares(obj) {
  return Object.entries(obj);
}

// Menu simples para demonstrar as funções
rl.question('Escolha uma opção:\n1. Converter pares para objeto\n2. Converter objeto para pares\n> ', (opcao) => {
  if (opcao === '1') {
    rl.question('Digite os pares em formato JSON (ex: [["a",1],["b",2]]):\n> ', (input) => {
      try {
        const pares = JSON.parse(input);
        const obj = paresParaObjeto(pares);
        console.log('Objeto resultante:', obj);
      } catch (error) {
        console.log('Erro ao processar os pares. Certifique-se de usar JSON válido.');
      }
      rl.close();
    });
  } else if (opcao === '2') {
    rl.question('Digite o objeto em formato JSON (ex: {"a":1,"b":2}):\n> ', (input) => {
      try {
        const obj = JSON.parse(input);
        const pares = objetoParaPares(obj);
        console.log('Array de pares resultante:', pares);
      } catch (error) {
        console.log('Erro ao processar o objeto. Certifique-se de usar JSON válido.');
      }
      rl.close();
    });
  } else {
    console.log('Opção inválida.');
    rl.close();
  }
});
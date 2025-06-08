function memoize(fn) {
  const cache = {};

  return function (...args) {
    const chave = JSON.stringify(args);
    if (cache[chave]) {
      console.log('Resultado do cache!');
      return cache[chave];
    } else {
      const resultado = fn(...args);
      cache[chave] = resultado;
      return resultado;
    }
  };
}

// Exemplo: função lenta
function soma(a, b) {
  console.log('Calculando...');
  return a + b;
}

const somaMemo = memoize(soma);

// Teste
console.log(somaMemo(2, 3));  // Calcula
console.log(somaMemo(2, 3));  // Usa cache
console.log(somaMemo(4, 5));  // Calcula
console.log(somaMemo(4, 5));  // Usa cache

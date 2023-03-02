function sequenciaFibonacci(numero) {
  let a = 0,
    b = 1;
  const sequencia = [0];
  while (b <= numero) {
    sequencia.push(b);
    let c = a + b;
    a = b;
    b = c;
  }
  if (sequencia.includes(numero)) {
    return `O número ${numero} pertence à sequência de Fibonacci: ${sequencia.join(
      ', '
    )}.`;
  } else {
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
  }
}

console.log(sequenciaFibonacci(55));

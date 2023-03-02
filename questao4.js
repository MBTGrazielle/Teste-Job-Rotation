// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
//
let faturamento = [
  {
    estado: 'SP',
    valor: 67836.43,
  },
  {
    estado: 'RJ',
    valor: 36678.66,
  },
  {
    estado: 'MG',
    valor: 29229.88,
  },
  {
    estado: 'ES',
    valor: 27165.48,
  },
  {
    estado: 'Outros',
    valor: 19849.53,
  },
];

let valores = [];
let somaValorTotal;

//Calcula Valor Total do Faturamento
function calculaValorTotal(array) {
  for (let valor of array) {
    valores.push(valor.valor);
  }
  somaValorTotal = valores.reduce((acumulador, valor) => acumulador + valor);
}
calculaValorTotal(faturamento);

//Calcula Percentual de Faturamento por Estado
function percentualFaturamentoPorEstado(array, estado) {
  for (let estados of array) {
    if (estados.estado == estado) {
      console.log(
        `O percentual de faturamento de ${estados.estado} foi de : ${(
          (estados.valor * 100) /
          somaValorTotal
        ).toFixed(1)}%`
      );
    }
  }
}
percentualFaturamentoPorEstado(faturamento, 'MG');

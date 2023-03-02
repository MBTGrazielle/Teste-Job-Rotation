let faturamento = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

let valores = [];
let faturamentoTotal;
let dias = [];
let media = [];
let acimaMedia = [];

//Separa os feriados e finais de semana
function separaFeriadosFDS(arrayParaSeparar, arraySeparada) {
  for (let valor of arrayParaSeparar) {
    if (valor.valor !== 0.0) {
      arraySeparada.push(valor.valor);
    }
  }
}
separaFeriadosFDS(faturamento, valores);

//Calcula Faturamento total
function calculaFaturamentoTotal(arraySeparada) {
  faturamentoTotal = arraySeparada.reduce(
    (acumulador, valor) => acumulador + valor
  );
  console.log('--------------------------------------------------------------');
  console.log(`O faturamento total foi de : R$ ${faturamentoTotal}.`);
  console.log('--------------------------------------------------------------');
}
calculaFaturamentoTotal(valores);

//Verifica se o faturamento diário foi superior do que a média mensal
function verificaFaturamentoDiario(array) {
  let numeroDiasMes = array.length;
  dias.push(numeroDiasMes);
  if (numeroDiasMes > 1) {
    mensagem = `O total de dias do mês foi de : ${numeroDiasMes} dias.`;
  } else if (numeroDiasMes == 1) {
    mensagem = `O total de dias do mês foi de : ${numeroDiasMes} dia.`;
  } else {
    mensagem = `Não houve apuração do faturamento da distribuidora.`;
  }
  console.log(mensagem);
  console.log('--------------------------------------------------------------');
}
verificaFaturamentoDiario(faturamento);

//Verifica a média mensal do faturamento
function mediaMensalFaturamento() {
  let mediaMensal = faturamentoTotal / dias;
  media.push(mediaMensal);
  console.log(`A média mensal do faturamento foi de : R$ ${mediaMensal}.`);
  console.log('--------------------------------------------------------------');
}
mediaMensalFaturamento();

// //Detalhamento de dias onde houve faturamento diário superior à média mensal.
function diasFaturamentoMaiorMediaMensal(arrayParaSeparar) {
  for (let valor of arrayParaSeparar) {
    let faturamentoSuperiorDias = valor.valor > media;
    if (faturamentoSuperiorDias) {
      console.log(
        `Dia ${valor.dia} houve faturamento diário superior à média mensal. `
      );
      acimaMedia.push(valor);
    }
  }
  console.log(
    `O número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi de : ${acimaMedia.length}.`
  );
}
diasFaturamentoMaiorMediaMensal(faturamento);

//Verifica maior e menor faturamento diário
function verificaMaiorFaturamento(arraySeparada) {
  console.log('--------------------------------------------------------------');
  const maiorFaturamento = arraySeparada.reduce(function (prev, current) {
    return prev > current ? prev : current;
  });
  console.log(`O maior valor de faturamento foi R$ ${maiorFaturamento}`);
}
verificaMaiorFaturamento(valores);

function verificaMenorFaturamento(arraySeparada) {
  const menorFaturamento = arraySeparada.reduce(function (prev, current) {
    return prev < current ? prev : current;
  });
  console.log(`O menor valor de faturamento foi R$ ${menorFaturamento}.`);
  console.log('--------------------------------------------------------------');
}
verificaMenorFaturamento(valores);

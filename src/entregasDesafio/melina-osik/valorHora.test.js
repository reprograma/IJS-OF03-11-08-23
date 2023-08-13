const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe("teste de valor por hora", () => {
  test("deve retornar o valor da hora corretamente dado o valor da renda mensal", () => {
    // setup (o que a funcao que sera testada precisa pra funcionar)
    const valorPorMes = 5000;

    // acao (execucao da funcao testada)
    const result = calcularValorPorHora(valorPorMes);

    // verificacao (o que se espera que seja retornado comparado com o que de fato esta retornando)
    expect(result).toEqual(29)
  });
})
const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('teste valor da hora', ()=>{
  test('deveria devolver o valor da hora de acordo com o valor recebido por mês', ()=>{
    const renda = 5000;

    const valorPorHora = calcularValorPorHora(renda)

    expect(valorPorHora).toBe(29);
    expect(typeof valorPorHora).toBe('number');

  });
})
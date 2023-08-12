const { calcularValorBaseProjeto, calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../../dominio/calculadora/Projeto/pacote');

describe('teste valores do projeto', ()=>{
  beforeEach(()=>{
    pacote.calcularPacote.mockReturnValue('pacote_basico')
    jest.clearAllMocks()
  })

  test('deveria retornar o valor base do projeto', ()=>{
    const valorHora = 50;
    const horasPorProjeto = 180

    const valorBase = calcularValorBaseProjeto(horasPorProjeto, valorHora)

    expect(valorBase).toEqual(9000)
  });

  test('deveria retornar o valor total do projeto para valor da hora 50', ()=>{
    const valorHora = 50;
    const funcionalidades = [
      'formulario',
      'otimizacao_seo',
      'construcao_1_pagina',
      'integracao_api_propria'
    ];

    const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(valorTotal).toEqual(3080);
    expect(pacote.calcularPacote).toHaveBeenCalledTimes(1);

  });

  test('deveria retornar o valor total do projeto para valor da hora 70', ()=>{
    const valorHora = 70;
    const funcionalidades = [
      'setup',
      'responsividade',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'construcao_1_pagina',
    ];

    const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(valorTotal).toEqual(3696);
    expect(pacote.calcularPacote).toHaveBeenCalledTimes(1);
  });
})

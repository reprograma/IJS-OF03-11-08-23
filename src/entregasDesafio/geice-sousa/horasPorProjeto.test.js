const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('teste horas por projeto', ()=>{
  test('deveria devolver a quantidade de horas necessarias para desenvolver o projeto', ()=>{
    const array = [
      'formulario',
      'otimizacao_seo',
      'construcao_1_pagina',
      'integracao_api_propria'
    ];
    
    const horasDeProjeto = calcularHorasDeProjeto(array);

    expect(horasDeProjeto).toEqual(56);
    expect(typeof horasDeProjeto).toBe('number');
    
  });

})

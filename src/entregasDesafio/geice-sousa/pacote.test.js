const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('teste horas por pacote', ()=>{
  test('deveria retornar pacote basico', ()=>{
    const horas = 45;

    const pacote = calcularPacote(horas);

    expect(pacote).toEqual('pacote_basico')
    expect(pacote).toMatch('pacote_basico')
    expect(pacote).not.toMatch('pacote_intermediario')
    expect(pacote).not.toMatch('pacote_premium')
  });

  test('deveria retornar pacote basico quando for 50h', ()=>{
    const horas = 50;

    const pacote = calcularPacote(horas);

    expect(pacote).toEqual('pacote_basico')
    expect(pacote).toMatch('pacote_basico')
    expect(pacote).not.toMatch('pacote_intermediario')
    expect(pacote).not.toMatch('pacote_premium')
  });

  test('deveria retornar pacote intermediario', ()=>{
    const horas = 60;

    const pacote = calcularPacote(horas);

    expect(pacote).toEqual('pacote_intermediario')
    expect(pacote).toMatch('pacote_intermediario')
    expect(pacote).not.toMatch('pacote_basico')
    expect(pacote).not.toMatch('pacote_premium')
  });

  test('deveria retornar pacote intermediario quando for 100h', ()=>{
    const horas = 100;

    const pacote = calcularPacote(horas);

    expect(pacote).toEqual('pacote_intermediario')
    expect(pacote).toMatch('pacote_intermediario')
    expect(pacote).not.toMatch('pacote_basico')
    expect(pacote).not.toMatch('pacote_premium')
  });

  test('deveria retornar pacote premium', ()=>{
    const horas = 150;

    const pacote = calcularPacote(horas);

    expect(pacote).toEqual('pacote_premium')
    expect(pacote).toMatch('pacote_premium')
    expect(pacote).not.toMatch('pacote_basico')
    expect(pacote).not.toMatch('pacote_intermediario')
  });

  test('deveria retornar pacote premium quando for 200h', ()=>{
    const horas = 200;

    const pacote = calcularPacote(horas);

    expect(pacote).toEqual('pacote_premium')
    expect(pacote).toMatch('pacote_premium')
    expect(pacote).not.toMatch('pacote_basico')
    expect(pacote).not.toMatch('pacote_intermediario')
  });

})
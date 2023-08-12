const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe(" Calcular o pacote correto para cada projeto", () => {
  test("retornar pacote basico dado o numero total de horas seja até 50 h", () => {
    // setup
    const pacoteDeHoras = 32;
    // acao
    const result = calcularPacote(pacoteDeHoras);
    // verificacao
    expect(result).toEqual("pacote_basico");
  });

  test("retornar pacote basico com exatamente 50h", () => {
    // setup
    const pacoteDeHoras = 50;
    // acao
    const result = calcularPacote(pacoteDeHoras);
    // verificacao
    expect(result).toEqual("pacote_basico");
  });
});

test("retornar pacote intermediario dado o numero total de horas seja até 100 hr", () => {
  // setup
  const pacoteDeHoras = 88;
  // acao
  const result = calcularPacote(pacoteDeHoras);
  // verificacao
  expect(result).toEqual("pacote_intermediario");
});

test("retornar pacote intermediario com exatamente 100h", () => {
  // setup
  const pacoteDeHoras = 100;
  // acao
  const result = calcularPacote(pacoteDeHoras);
  // verificacao
  expect(result).toEqual("pacote_intermediario");
});

test("retornar pacote premium dado o numero total de horas seja até 200 hr", () => {
  // setup
  const pacoteDeHoras = 155;
  // acao
  const result = calcularPacote(pacoteDeHoras);
  // verificacao
  expect(result).toEqual("pacote_premium");
});

test("retornar pacote premium com exatamente 200h", () => {
  // setup
  const pacoteDeHoras = 200;
  // acao
  const result = calcularPacote(pacoteDeHoras);
  // verificacao
  expect(result).toEqual("pacote_premium");
});


  


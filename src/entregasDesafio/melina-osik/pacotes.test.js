const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe("calcular o pacote correto para cada projto", () => {
  test("deve retornar o pacote basico dado o numero total de horas ate 50h", () => {
    //setup
    const totalDeHoras = 30;

    //acao
    const result = calcularPacote(totalDeHoras);

    //verificacao
    expect(result).toEqual("pacote_basico")
  });
  test("deve retornar o pacote basico dado o numero total de horas igual a 50h", () => {
    //setup
    const totalDeHoras = 50;

    //acao
    const result = calcularPacote(totalDeHoras);

    //verificacao
    expect(result).toEqual("pacote_basico")
  });
  test("deve retornar o pacote intermediario dado o numero total de horas ate 100h", () => {
    //setup
    const totalDeHoras = 67;

    //acao
    const result = calcularPacote(totalDeHoras);

    //verificacao
    expect(result).toEqual("pacote_intermediario")
  });
  test("deve retornar o pacote intermediario dado o numero total de horas igual a 100h", () => {
    //setup
    const totalDeHoras = 100;

    //acao
    const result = calcularPacote(totalDeHoras);

    //verificacao
    expect(result).toEqual("pacote_intermediario")
  });
  test("deve retornar o pacote premium dado o numero total de horas ate 200h", () => {
    //setup
    const totalDeHoras = 128;

    //acao
    const result = calcularPacote(totalDeHoras);

    //verificacao
    expect(result).toEqual("pacote_premium")
  });
  test("deve retornar o pacote premium dado o numero total de horas igual a 200h", () => {
    //setup
    const totalDeHoras = 200;

    //acao
    const result = calcularPacote(totalDeHoras);

    //verificacao
    expect(result).toEqual("pacote_premium")
  });
  // test("deve retornar erro dado o numero total de horas maior que 200", () => {
  //   //setup
  //   const totalDeHoras = 203;

  //   //acao
  //   const result = calcularPacote(totalDeHoras);

  //   //verificacao
  //   expect(result).toThrow(new Error)
  // });
})
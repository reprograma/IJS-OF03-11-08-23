const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto.js")
const pacote = require("../../dominio/calculadora/Projeto/pacote.js")

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("Calcular o valor total do projeto", ()=>{
  beforeEach(()=>{
    pacote.calcularPacote.mockReturnValue("pacote_basico")
  })
  test("Dado uma lista de funcionalidades e um valor hora, deve retornar valor total do projeto", ()=>{
    //setup
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina"
    ]//somam 48 horas
    const valorHora = 70
    //acao
    const result = calcularValorTotalProjeto(funcionalidades, valorHora)
    //verificacao
    expect(result).toEqual(3696)
  });
});
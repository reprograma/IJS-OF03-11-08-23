const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")
const pacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("calcula valor total do projeto ate 50h", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico")
  });
  test("dada uma lista de funcionalidades e um valor/hora, deve retornar o valor do pacote", () => {
    //setup
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ]; // somam 48h
    const valorHora = 70

    //acao
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    //verficacao
    expect(result).toEqual(3696)
  });
})
describe("calcula valor total do projeto ate 100h", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_intermediario")
  });
  test("dada uma lista de funcionalidades e um valor/hora, deve retornar o valor do pacote", () => {
    //setup
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr"
    ]; // somam 72h
    const valorHora = 70

    //acao
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    //verficacao
    expect(result).toEqual(5645)
  });
})
describe("calcula valor total do projeto ate 200h", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_premium")
  });
  test("dada uma lista de funcionalidades e um valor/hora, deve retornar o valor do pacote", () => {
    //setup
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria"
    ]; // somam 104h
    const valorHora = 70

    //acao
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    //verficacao
    expect(result).toEqual(8372)
  });
})
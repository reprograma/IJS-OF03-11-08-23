const { calcularValorBaseProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")

describe("calcula valor base do projeto", () => {
  test("deve retornar o valor base do projeto dado o total de horas em relacao ao valor por hora", () => {
    //setup
    const totalDeHoras = 48
    const valorHora = 70

    //acao
    const result = calcularValorBaseProjeto(totalDeHoras, valorHora)

    //verficacao
    expect(result).toEqual(3360)
  });
})
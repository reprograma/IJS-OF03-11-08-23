const {calcularValorTotalProjeto} = require("../../dominio/calculadora/Projeto/valorProjeto")
const pacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("Calcula valor total do projeto", () => {
    beforeEach(() =>{
        pacote.calcularPacote.mockReturnValue("pacote_basico")
    })
    test("Dado uma lista de funcionalidades e um valor hora, deve retornar valor total do pacote", ()=> {
    // setup
    const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina"
    ]// somam 48
    const valorHora = 70
    // acao
    const result = calcularValorTotalProjeto(funcionalidades, valorHora)

    // verficacao (3.696)
    expect(result).toEqual(3696)
    })
})
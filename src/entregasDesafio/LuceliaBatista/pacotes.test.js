const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")
const pacote = require("../../dominio/calculadora/constantes/constantes")

describe("Calcular pacote correto para cada projeto", () => {

    test("Retorna pacote básico caso o número total de horas seja de até 50h", () => {
        const totalDeHorasPorProjeto = 49

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual("pacote_basico")
    })

    test("Retorna pacote básico caso o número total de horas seja exatamente 50h", () => {
        const totalDeHorasPorProjeto = 50

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual("pacote_basico")
    })

    test("Retorna pacote intermediário caso o número total de horas esteja entre 51h a 100h", () => {
        const totalDeHorasPorProjeto = 51

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual("pacote_intermediario")
    })

    test("Retorna pacote intermediario caso o número total seja exatamente 100h", () => {
        const totalDeHorasPorProjeto = 100

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual("pacote_intermediario")
    })


    test("Retorna pacote premium caso o número total esteja entre 101h a 200h", () => {
        const totalDeHorasPorProjeto = 101

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual("pacote_premium")
    })


    test("Retorna pacote premium caso o número total de horas seja exatamente 200h", () => {
        const totalDeHorasPorProjeto = 200

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual("pacote_premium")
    })
})

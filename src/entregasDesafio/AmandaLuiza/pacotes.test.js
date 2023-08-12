const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe("Calcular o pacote correto para cada projeto", () => {
    test("Retorna pacote básico dado o número total de horas seja 50h", () => {
        //setup
        const valorPorPacote = 50;
        //acao
        const result = calcularPacote(valorPorPacote)
        //verificacao
        expect(result).toEqual("pacote_basico")

    })

    test("Retorna pacote básico dado o número total de horas seja 100h", () => {
        //setup
        const valorPorPacote = 100;
        //acao
        const result = calcularPacote(valorPorPacote)
        //verificacao
        expect(result).toEqual("pacote_intermediario")

     })

    test("Retorna pacote básico dado o número total de horas seja maior que 200h", () => {
        //setup
        const valorPorPacote = 201;
        //acao
        const result = calcularPacote(valorPorPacote)
        //verificacao
        expect(result).toEqual("pacote_premium")
    })

    //retornar o basico com exatos 50h
    //retornar intermadiario menor que 100h
    //retornar intermediario com exatos 100h
    //retornar premium para horario menor que 200h
    //retornar premium com exatos 200h
    //retornar erro quando a hora for maior de 200h


})

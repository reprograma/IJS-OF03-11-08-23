const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe("Valor por hora", () => {
    test("Retornar o valor arredondado correto, dado um valor recebido no mês", () => {
        //Setup
        const valorPorMes = 5000;

        //Ação
        const result = calcularValorPorHora(valorPorMes)

        //Verificação
        expect(result).toEqual(29)
    })

    test("Retornar erro se o tipo de dado informado estiver incorreto", () => {
        const valorPorMes = "Texto";

        const result = calcularValorPorHora(valorPorMes)

        expect(result).toEqual(NaN)
    })
})
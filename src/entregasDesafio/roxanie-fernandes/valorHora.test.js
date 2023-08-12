const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")


describe("Teste de Valor por hora", ()=>{
    test("retornar o valor da hora corretamente dado o valor da renda mensal", ()=>{
        // setup (o que a minha funcao que vai ser testada precisa para funcionar?)
        const valorPorMes = 5000;

        // acao (execusao da funcao testada)
        const result = calcularValorPorHora(valorPorMes)

        // verificacao (o que eu espero que seja retornado comparado com o que de fato é retornado)
        expect(result).toEqual(29)
    });
})
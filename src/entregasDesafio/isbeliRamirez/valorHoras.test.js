const { calcularValorPorHora} = require("../../dominio/calculadora/Hora/valorHora")


describe("Teste de Valor po Hora", ()=>{
    test("Retornar o valor da hora corretamente dado um valor da renda mensal", ()=>{
        //setup (O que a minha funcao q vai ser testada precisa pra funcionar)
        const valorPorMes = 5000;


        //acao (execucao da funcao testada)
        const result = calcularValorPorHora(valorPorMes);


        //verificacao (o que eu espero que seja retornado comparado com o que de fato e retornado )
        expect(result).toEqual(29)
    })
})
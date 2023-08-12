const {calcularValorPorHora} = require("../../dominio/calculadora/Hora/valorHora")


describe("Testes de Valor por Hora", ()=> {
    test("Retornar o valor da hora corretamente dado um valor da renda mensal", () =>{
        //setup (O QUE MINHA FUNCAO TESTADA PRECISA PARA FUNCIONAR?)
        const valorPorMes = 5000;
        //acao (EXECUÇAO DA FUNCAO TESTADA)
        const result = calcularValorPorHora(valorPorMes)
        //verificacao (O QUE EU ESPERO QUE SEJA RETORNADO COMPARADO COM O QUE DE FATO ESTA RETORNANDO)
        expect(result).toEqual(29)
    })
})
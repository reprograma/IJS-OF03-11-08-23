const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Teste de calculo de horas por projeto", ()=>{
    test("Dado uma lista de funcionalidade desejadas do projeto, deve retornar a soma de horas totais", () => {
        //setup
        const funcionalidade = [
            "setup",
            "responsividade",
            "formulario",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "ssr"
        ]
        //acao
        const result = calcularHorasDeProjeto(funcionalidade);


        //verificacao
        expect(result).toEqual(72)

    })
})
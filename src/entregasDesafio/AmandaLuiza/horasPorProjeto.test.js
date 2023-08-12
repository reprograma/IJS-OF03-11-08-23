const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Calculo de horas totais de um projeto", ()=> {
    test("Dado uma lista de funcionalidades desejadas do projeto, deve retornar a soma de horas totais", ()=> {
        //setup
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "formulario",
            "ssr"

        ]
        //acao
        const result  = calcularHorasDeProjeto(funcionalidades)
        //verificacao
        expect(result).toEqual(72)
    })
})
const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Cálculo de horas totais de um projeto", () => {
    test("Dado uma array com as funcionalidades desejadas do projeto, deve retornar o total da soma de horas necessárias", () => {
        //Setup
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "formulario",
            "ssr"
        ]

        //Ação
        const result = calcularHorasDeProjeto(funcionalidades)

        //Verificação do resultado
        expect(result).toEqual(72)
    })

    test("Dado uma lista com funcionalidades que não estão mapeadas, retornar erro", () => {
        const funcionalidades = [
            "construcao_2_pagina",
            "construcao_3_pagina",
        ]
        const result = calcularHorasDeProjeto(funcionalidades)

        expect(result).toEqual(NaN)
    })
})
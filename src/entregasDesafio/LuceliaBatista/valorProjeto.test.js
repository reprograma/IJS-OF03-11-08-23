const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")
const pacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("Valor total do projeto Básico", () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValueOnce("pacote_basico")
    })

    test("Retornar o valor do pacote, dado as funcionalidade e o valor hora", () => {
        //Setup
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
        ]

        const valorHora = 70;

        //Ação
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)

        //Verificação
        expect(result).toEqual(3696)
    })

    beforeEach(() => {
        pacote.calcularPacote.mockReturnValueOnce("pacote_intermediario")
    })

    test("Retornar o valor do pacote, dado as funcionalidade e o valor hora", () => {

        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
        ]

        const valorHora = 70;

        const result = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(result).toEqual(4390)
    })
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValueOnce("pacote_premium")
    })

    test("Retornar o valor do pacote, dado as funcionalidade e o valor hora", () => {

        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "integracao_mailchimp",
            "integracao_mailchimp",
            "integracao_mailchimp",
            "integracao_api_propria",
            "integracao_api_propria",
            "integracao_api_propria",
        ]

        const valorHora = 70;

        const result = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(result).toEqual(13524)
    })
})
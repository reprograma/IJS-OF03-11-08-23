const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")
const pacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("Calcula valor total do projeto", ()=>{
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue("pacote_basico")
    })
    test("Dado uma lista de funcionalidades e um valor hora, deve retornar valor do pacote", ()=>{
        // setup
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina"
        ]//somam 48horas
        const valorHora = 70
        
        // acao
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        
        // verificacao (3.763)
        expect(result).toEqual(3763)

    })

    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue("pacote_intermediario")
    })
    test("Dado uma lista de funcionalidades e um valor hora, deve retornar valor do pacote", ()=>{
        // setup
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "integracao_mailchimp"
        ]
        const valorHora = 70
        
        // acao
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        
        // verificacao (5.018)
        expect(result).toEqual(5018)

    })

    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue("pacote_intermediario")
    })
    test("Dado uma lista de funcionalidades e um valor hora, deve retornar valor do pacote", ()=>{
        // setup
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "integracao_api_propria"
        ]
        const valorHora = 70
        
        // acao
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        
        // verificacao (6.899)
        expect(result).toEqual(6899)

    })
})
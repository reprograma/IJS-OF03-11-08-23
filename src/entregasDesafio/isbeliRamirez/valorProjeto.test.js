const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");


describe("Calcula valor total do projeto", ()=>{
    
    test("Dado uma lista de funcionalidades e um valor hora, debe retornar valor do pacote", ()=>{
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
        ]
        const valorHora = 70
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        expect(result).toEqual(3696)
    });
}) ;
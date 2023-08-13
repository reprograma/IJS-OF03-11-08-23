const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");

describe("Teste que calcula o porcentaje de pacotes por taxas",() =>{

    test("Aplica taxa do 10% a pacote de 50h ", () => { 

        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
        ]
        //total 48 hs
        const valorHora = 70
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);
        expect(result).toEqual(3696)

    });

    test("Aplica taxa do 12% a pacote de 100h ", () => { 

        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "otimizacao_seo"
        ]
        //total 64 hs
        const valorHora = 70
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        expect(result).toEqual(5018)

    });

    test("Aplica taxa do 15% a pacote de 200h ", () => { 

        const funcionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "otimizacao_seo",
            "integracao_mailchimp",
            "integracao_api_propria"
        ]
        //total 112 hs
        const valorHora = 70
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        expect(result).toEqual(9016)

    });

    test("erro quantidade de horas maior a 200h ", () => { 

        const funcionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "otimizacao_seo",
            "integracao_mailchimp",
            "integracao_api_propria",
            "setup",
            "formulario",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "otimizacao_seo",
            "integracao_mailchimp",
            "integracao_api_propria"
        ]
        //total 224 hs
        const valorHora = 70

        function errorCalculo() {
            calcularValorTotalProjeto(funcionalidades, valorHora)
        }

        expect(errorCalculo).toThrow("Cannot read properties of undefined (reading '0')");

    });


});
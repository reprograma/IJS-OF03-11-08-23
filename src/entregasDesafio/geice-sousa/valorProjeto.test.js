const {
  calcularValorBaseProjeto,
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");

const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("teste valores do projeto", () => {
  describe("teste do valor base", () => {
    test("deveria retornar o valor base do projeto", () => {
      const valorHora = 50;
      const horasPorProjeto = 180;

      const valorBase = calcularValorBaseProjeto(horasPorProjeto, valorHora);

      expect(valorBase).toEqual(9000);
    });
  });

  describe("valor total do projeto com pacote basico", () => {
    beforeEach(() => {
      pacote.calcularPacote.mockReturnValue("pacote_basico");
      jest.clearAllMocks();
    });

    test("deveria retornar o valor total do projeto para valor da hora 50", () => {
      const valorHora = 50;
      const funcionalidades = [
        "formulario",
        "otimizacao_seo",
        "construcao_1_pagina",
        "integracao_api_propria",
      ];

      const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora);

      expect(valorTotal).toEqual(3080);
      expect(pacote.calcularPacote).toHaveBeenCalledTimes(1);
    });

    test("deveria retornar o valor total do projeto para valor da hora 70", () => {
      const valorHora = 70;
      const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
      ];

      const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora);

      expect(valorTotal).toEqual(3696);
      expect(pacote.calcularPacote).toHaveBeenCalledTimes(1);
    });
  });

  describe("valor total do projeto com pacote intermediario", () => {
    beforeEach(() => {
      pacote.calcularPacote.mockReturnValue("pacote_intermediario");
      jest.clearAllMocks();
    });
    test("deveria retornar o valor total do projeto para o pacote intermediario", () => {
      const valorHora = 80;
      const funcionalidades = [
        "formulario",
        "otimizacao_seo",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "integracao_api_propria",
        "ssr",
      ];

      const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora);

      expect(valorTotal).toEqual(6451);
      expect(pacote.calcularPacote).toHaveBeenCalledTimes(1);
    });
  });

  describe("valor total do projeto com pacote premium", () => {
    beforeEach(() => {
      pacote.calcularPacote.mockReturnValue("pacote_premium");
      jest.clearAllMocks();
    });
    test("deveria retornar o valor total do projeto com pacote premium", () => {
      const valorHora = 90;
      const funcionalidades = [
        'setup',
        'formulario',
        'formulario',
        'responsividade',
        'otimizacao_seo',
        'construcao_1_pagina',
        'integracao_mailchimp',
        'ssr',
        'integracao_api_propria'
      ];

      const valorTotal = calcularValorTotalProjeto(
        funcionalidades,
        valorHora
      );

      expect(valorTotal).toEqual(12420);
      expect(pacote.calcularPacote).toHaveBeenCalledTimes(1);
    });
  });
});

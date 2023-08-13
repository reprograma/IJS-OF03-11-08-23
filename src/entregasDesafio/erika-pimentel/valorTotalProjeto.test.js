const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto.js")
const pacote = require("../../dominio/calculadora/Projeto/pacote.js")

describe("calcularValorTotalProjeto", () => {
  const valorHora = 50; // Valor hipotético da taxa por hora

  test("Deve calcular o valor total do projeto para um pacote básico", () => {
    const funcionalidades = ["formulario", "setup"];
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(resultado).toEqual(1320); // Calculado manualmente com base nas taxas e horas definidas nas constantes
  });

  test("Deve calcular o valor total do projeto para um pacote intermediário", () => {
  const funcionalidades = ["formulario", "responsividade", "integracao_mailchimp", "otimizacao_seo", "integracao_api_propria"];
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(resultado).toEqual(4480); // Calculado manualmente com base nas taxas e horas definidas nas constantes
  });

  test("Deve calcular o valor total do projeto para um pacote premium", () => {
    const funcionalidades = ["formulario", "responsividade", "otimizacao_seo", "integracao_mailchimp", "integracao_api_propria", "integracao_api_propria", "ssr"];
    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(resultado).toEqual(5980); // Calculado manualmente com base nas taxas e horas definidas nas constantes
  });
});
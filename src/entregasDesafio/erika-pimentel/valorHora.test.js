const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora.js");


describe("Teste de Valor por Hora", ()=>{
  test("Retornar o valor da hora corretamente dado o valor da renda mensal", ()=>{
    //setup (o que a minha fuiçao precisa para funcionar corretamente)
    const valorPorMes = 5000;

    //acao (o que a minha funcao vai fazer)
    const result  = calcularValorPorHora(valorPorMes);

    //verificacao (o que a minha funcao deve retornar)
    expect(result).toEqual(29);
  }); 
  
})
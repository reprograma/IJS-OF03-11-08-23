const {calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto.js");

describe("Calculo de Horas totais de um Projeto", ()=>{
  test("Dado uma lista de funcionalidades desejadas do projeto, deve retornar a soma de horas totais", ()=>{
    //setup (o que a minha funçao precisa para funcionar corretamente)
    const funcionalidades = [
      "setup",
      "responsividade", 
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr"]
    
    //acao (o que a minha funcao vai fazer)
    const result  = calcularHorasDeProjeto(funcionalidades);

    //verificacao (o que a minha funcao deve retornar)
    expect(result).toEqual(72);
  }); 
  
})
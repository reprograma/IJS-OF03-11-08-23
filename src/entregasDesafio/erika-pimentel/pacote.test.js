const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote.js");

describe("Calcular o pacote correto para cada projeto", ()=>{
  test("Retornar pacote básico dado o numero total de horas seja ate 50h", ()=>{
    //setup (o que a minha fuiçao precisa para funcionar corretamente)
    const totalDeHoras = 49; 

    //acao (o que a minha funcao vai fazer)
    const result  = calcularPacote(totalDeHoras);

    //verificacao (o que a minha funcao deve retornar)
    expect(result).toEqual("pacote_basico");
  }); 


  test("Retornar pacote básico dado o numero total de horas seja exatamente 50h", ()=>{
    //setup (o que a minha funçao precisa para funcionar corretamente)
    const totalDeHoras = 50; 

    //acao (o que a minha funcao vai fazer)
    const result  = calcularPacote(totalDeHoras);

    //verificacao (o que a minha funcao deve retornar)
    expect(result).toEqual("pacote_basico");
  });
  

  test("Retornar pacote básico dado o numero total de horas seja menor que 100h", ()=>{
    //setup (o que a minha funçao precisa para funcionar corretamente)
    const totalDeHoras = 90; 

    //acao (o que a minha funcao vai fazer)
    const result  = calcularPacote(totalDeHoras);

    //verificacao (o que a minha funcao deve retornar)
    expect(result).toEqual("pacote_intermediario");
  });


  test("Retornar pacote básico dado o numero total de horas seja exatamente 100h", ()=>{
    //setup (o que a minha funçao precisa para funcionar corretamente)
    const totalDeHoras = 100; 

    //acao (o que a minha funcao vai fazer)
    const result  = calcularPacote(totalDeHoras);

    //verificacao (o que a minha funcao deve retornar)
    expect(result).toEqual("pacote_intermediario");
  });


  test("Retornar pacote básico dado o numero total de horas seja menor que 200h", ()=>{
    //setup (o que a minha funçao precisa para funcionar corretamente)
    const totalDeHoras = 150; 

    //acao (o que a minha funcao vai fazer)
    const result  = calcularPacote(totalDeHoras);

    //verificacao (o que a minha funcao deve retornar)
    expect(result).toEqual("pacote_premium");
  });


  test("Retornar pacote básico dado o numero total de horas seja exatamente 200h", ()=>{
    //setup (o que a minha funçao precisa para funcionar corretamente)
    const totalDeHoras = 200; 

    //acao (o que a minha funcao vai fazer)
    const result  = calcularPacote(totalDeHoras);

    //verificacao (o que a minha funcao deve retornar)
    expect(result).toEqual("pacote_premium");
  });


  test("Retornar pacote básico dado o numero total de horas seja maior que 200h", () => {
    //setup (o que a minha função precisa para funcionar corretamente)
    const totalDeHoras = 250;
  
    // Ação e verificação (o que a minha função deve fazer e retornar)
    let result;
    try {
      result = calcularPacote(totalDeHoras);
    } catch (error) {
      // Se a função lançar um erro, o teste será aprovado
      expect(error).toBeInstanceOf(TypeError);
      return;
    }
    // Verificar se o resultado é undefined
    expect(result).toBeUndefined();
  });
})
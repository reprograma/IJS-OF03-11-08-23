const { calcularValorPorPacote, calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")


describe("Calcular o pacote correto para cada projeto", ()=>{
    test("Retornar pacote basico dado o numero total de horas seja ate 50h", () => { 
    const totalDeHoras = 50
    const result = calcularPacote(totalDeHoras);

    expect(result).toEqual("pacote_basico");
});
    test("retornar intermediario pra horario menor que 100h", () => { 
        const  totalDeHoras = 90
        const result = calcularPacote(totalDeHoras);
        expect(result).toEqual("pacote_intermediario");
    });
    test("retornar intermediario com exatamente 100h", () => { 
        const totalDeHoras = 100
        const result = calcularPacote(totalDeHoras);
        expect(result).toEqual("pacote_intermediario");
    });
    test("retornar premium para  horario menor que 200", () =>{
        const totalDeHoras = 199
        const result = calcularPacote(totalDeHoras);
        expect(result).toEqual("pacote_premium");
    });
    test("//retornar premium com exatamente 200h", () => { 
        const totalDeHoras = 200
        const result = calcularPacote(totalDeHoras);
        expect(result).toEqual("pacote_premium")
    });
    
})




//retornar o basico com exatamente 50h
//retornar intermediario pra horario menor que 100h
//retornar intermediario com exatamente 100h
//retornar premium para  horario menor que 200h
//retornar premium com exatamente 200h
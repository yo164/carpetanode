const {
    sumar,
    restar,
    multiplicar,
    dividir
  } = require("./calculadora");
  
  describe("Tests de la calculadora", () => {
  
    test("sumar 2 + 3 debe devolver 5", () => {
      expect(sumar(2, 3)).toBe(5);
    });
  
    test("restar 5 - 3 debe devolver 2", () => {
      expect(restar(5, 3)).toBe(2);
    });
  
    test("multiplicar 4 * 3 debe devolver 12", () => {
      expect(multiplicar(4, 3)).toBe(12);
    });
  
    test("dividir 10 / 2 debe devolver 5", () => {
      expect(dividir(10, 2)).toBe(5);
    });
  
    test("dividir por cero debe lanzar un error", () => {
      expect(() => dividir(10, 0)).toThrow("No se puede dividir por cero");
    });
  
  });
  
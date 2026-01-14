const {
    sumar,
    restar,
    multiplicar,
    dividir
  } = require("./calculadora");
  
  const [, , operacion, a, b] = process.argv;
  
  const num1 = Number(a);
  const num2 = Number(b);
  
  try {
    let resultado;
  
    switch (operacion) {
      case "sumar":
        resultado = sumar(num1, num2);
        break;
      case "restar":
        resultado = restar(num1, num2);
        break;
      case "multiplicar":
        resultado = multiplicar(num1, num2);
        break;
      case "dividir":
        resultado = dividir(num1, num2);
        break;
      default:
        console.log("Operación no válida");
        process.exit(1);
    }
  
    console.log("Resultado:", resultado);
  } catch (error) {
    console.error("Error:", error.message);
  }
  
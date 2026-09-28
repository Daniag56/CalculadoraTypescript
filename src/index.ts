const boton1 = document.getElementById("btn1") as HTMLButtonElement;
const boton2 = document.getElementById("btn2") as HTMLButtonElement;
const boton3 = document.getElementById("btn3") as HTMLButtonElement;
const boton4 = document.getElementById("btn4") as HTMLButtonElement;
const boton5 = document.getElementById("btn5") as HTMLButtonElement;
const boton6 = document.getElementById("btn6") as HTMLButtonElement;
const boton7 = document.getElementById("btn7") as HTMLButtonElement;
const boton8 = document.getElementById("btn8") as HTMLButtonElement;
const boton9 = document.getElementById("btn9") as HTMLButtonElement;
const boton0 = document.getElementById("btn0") as HTMLButtonElement;

const botonSumar = document.getElementById("sumar") as HTMLButtonElement;
const botonRestar = document.getElementById("restar") as HTMLButtonElement;
const botonMultiplicar = document.getElementById(
  "multiplicar",
) as HTMLButtonElement;
const botonDivision = document.getElementById("division") as HTMLButtonElement;

const botonIgual = document.getElementById("igual") as HTMLButtonElement;
const botonLimpiar = document.getElementById("limpiar") as HTMLButtonElement;

var display = document.getElementById("display") as HTMLDivElement;
var operadorActual = "0";
var operador1: number | null = null;

function actualizarDisplay() {
  display.innerText = operadorActual;
}

function limpiarDisplay() {
  operadorActual = "0";
  operador1 = null;
  actualizarDisplay();
}

function agregarNumero(numero: string) {
  if (operadorActual === "0") {
    operadorActual = numero;
  } else {
    operadorActual += numero;
  }
  actualizarDisplay();
}

var operadorPendiente: string | null = null;

function realizarOperacion(operacion: string) {
  const valorActual = parseFloat(operadorActual);

  if (operador1 === null) {
    operador1 = valorActual;
  } else if (operadorPendiente) {
    switch (operadorPendiente) {
      case "+":
        operador1 += valorActual;
        break;
      case "-":
        operador1 -= valorActual;
        break;
      case "*":
        operador1 *= valorActual;
        break;
      case "/":
        operador1 /= valorActual;
        break;
    }
  }

  operadorActual = "0";

  if (operacion === "=") {
    operadorActual = operador1.toString();
    operador1 = null;
    operadorPendiente = null;
  } else {
    operadorPendiente = operacion;
  }

  actualizarDisplay();
}
boton1.addEventListener("click", () => agregarNumero("1"));
boton2.addEventListener("click", () => agregarNumero("2"));
boton3.addEventListener("click", () => agregarNumero("3"));
boton4.addEventListener("click", () => agregarNumero("4"));
boton5.addEventListener("click", () => agregarNumero("5"));
boton6.addEventListener("click", () => agregarNumero("6"));
boton7.addEventListener("click", () => agregarNumero("7"));
boton8.addEventListener("click", () => agregarNumero("8"));
boton9.addEventListener("click", () => agregarNumero("9"));
boton0.addEventListener("click", () => agregarNumero("0"));
botonSumar.addEventListener("click", () => realizarOperacion("+"));
botonRestar.addEventListener("click", () => realizarOperacion("-"));
botonMultiplicar.addEventListener("click", () => realizarOperacion("*"));
botonDivision.addEventListener("click", () => realizarOperacion("/"));
botonIgual.addEventListener("click", () => realizarOperacion("="));
botonLimpiar.addEventListener("click", limpiarDisplay);

class Calculadora {
  private display: HTMLDivElement;
  private operadorActual = "0";
  private operador1: number | null = null;
  private operadorPendiente: string | null = null;

  constructor(private contenedor: HTMLElement) {
    this.display = contenedor.querySelector("#display") as HTMLDivElement;
    this.conectarBotones();
    this.actualizarDisplay();
  }

  conectarBotones() {
    for (let i = 0; i <= 9; i++) {
      this.contenedor.querySelector<HTMLButtonElement>(`#btn${i}`)?.addEventListener("click", () => this.agregarNumero(i.toString()));
    }
    this.contenedor.querySelector<HTMLButtonElement>("#sumar")?.addEventListener("click", () => this.realizarOperacion("+"));
    this.contenedor.querySelector<HTMLButtonElement>("#restar")?.addEventListener("click", () => this.realizarOperacion("-"));
    this.contenedor.querySelector<HTMLButtonElement>("#multiplicar")?.addEventListener("click", () => this.realizarOperacion("*"));
    this.contenedor.querySelector<HTMLButtonElement>("#division")?.addEventListener("click", () => this.realizarOperacion("/"));
    this.contenedor.querySelector<HTMLButtonElement>("#igual")?.addEventListener("click", () => this.realizarOperacion("="));
    this.contenedor.querySelector<HTMLButtonElement>("#limpiar")?.addEventListener("click", () => this.limpiarDisplay());
  }

  actualizarDisplay() {
    this.display.innerText = this.operadorActual;
  }

  limpiarDisplay() {
    this.operadorActual = "0";
    this.operador1 = null;
    this.operadorPendiente = null;
    this.actualizarDisplay();
  }

  agregarNumero(numero: string) {
    if (this.operadorActual === "0") this.operadorActual = numero;
    else this.operadorActual += numero;
    this.actualizarDisplay();
  }

  realizarOperacion(operacion: string) {
    const valorActual = parseFloat(this.operadorActual);

    if (this.operador1 === null) {
      this.operador1 = valorActual;
    } else if (this.operadorPendiente) {
      switch (this.operadorPendiente) {
        case "+": this.operador1 += valorActual; break;
        case "-": this.operador1 -= valorActual; break;
        case "*": this.operador1 *= valorActual; break;
        case "/": this.operador1 /= valorActual; break;
      }
    }

    this.operadorActual = "0";

    if (operacion === "=") {
      this.operadorActual = this.operador1.toString();
      this.operador1 = null;
      this.operadorPendiente = null;
    } else {
      this.operadorPendiente = operacion;
    }
    this.actualizarDisplay();
  }
}


new Calculadora(document.getElementById("calc1")!);
new Calculadora(document.getElementById("calc2")!);
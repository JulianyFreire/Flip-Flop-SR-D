  // Estado inicial do flip-flop
  let Q = 0;
  let Qnot = 1;

  function updateDisplay() {
    document.getElementById("outputQ").textContent = Q;
    document.getElementById("outputQnot").textContent = Qnot;
  }

  // Função para simular um pulso de clock: na borda de subida, Q recebe o valor de D
  function clockPulse() {
    let D = document.getElementById("inputD").value;
    if (D !== "0" && D !== "1") {
      alert("Por favor, insira 0 ou 1 para D.");
      return;
    }
    Q = D;
    Qnot = (D === "1") ? "0" : "1";
    updateDisplay();
  }

  // Função para simular o reset assíncrono: reseta Q para 0 imediatamente
  function asyncReset() {
    Q = 0;
    Qnot = 1;
    updateDisplay();
  }

  // Inicializa a tela com os valores iniciais
  updateDisplay();
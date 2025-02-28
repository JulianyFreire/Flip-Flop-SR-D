// Estado inicial do flip-flop
let Q = 0;
let Qnot = 1;

function updateDisplay() {
  document.getElementById("outputQ").textContent = Q;
  document.getElementById("outputQnot").textContent = Qnot;
}

// Função para simular o SET assíncrono: define Q = 1
function asyncSet() {
  Q = 1;
  Qnot = 0;
  updateDisplay();
}

// Função para simular o RESET assíncrono: define Q = 0
function asyncReset() {
  Q = 0;
  Qnot = 1;
  updateDisplay();
}

// Função para atualizar Q com base na entrada D
function updateFromD() {
  const D = document.getElementById("inputD").value;
  if (D === "0" || D === "1") {
    Q = parseInt(D);
    Qnot = Q === 1 ? 0 : 1;
    updateDisplay();
  } else {
    alert("Por favor, insira 0 ou 1 para D.");
  }
}

// Atualiza a saída quando o valor de D muda
document.getElementById("inputD").addEventListener("input", updateFromD);

// Inicializa a tela com os valores iniciais
updateDisplay();
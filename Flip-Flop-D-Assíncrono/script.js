let pr = 0; // Preset
let d = 0; // Data
let clk = 0; // Clock
let clr = 0; // Clear
let q = 0; // Saída Q
let qn = 1; // Saída Q' (inverso de Q)

function updateOutputs() {
  // Lógica do Flip-Flop D Assíncrono
  if (pr === 1 && clr === 1) {
    // Estado inválido (PR e CLR ativos ao mesmo tempo)
    q = 1;
    qn = 1;
  } else if (pr === 1) {
    // Preset ativo
    q = 1;
    qn = 0;
  } else if (clr === 1) {
    // Clear ativo
    q = 0;
    qn = 1;
  } else if (clk === 1) {
    // Atualiza Q com o valor de D na borda do clock
    q = d;
    qn = !d;
  }
  // Atualiza a exibição
  document.getElementById("qOutput").textContent = q;
  document.getElementById("qnOutput").textContent = qn ? 1 : 0;
}

function togglePR() {
  pr = pr ? 0 : 1;
  document.getElementById("prState").textContent = pr;
  updateOutputs();
}

function toggleD() {
  d = d ? 0 : 1;
  document.getElementById("dState").textContent = d;
  updateOutputs();
}

function toggleCLK() {
  clk = clk ? 0 : 1;
  document.getElementById("clkState").textContent = clk;
  updateOutputs();
}

function toggleCLR() {
  clr = clr ? 0 : 1;
  document.getElementById("clrState").textContent = clr;
  updateOutputs();
}

// Inicializa as saídas
updateOutputs();

// Função para calcular as saídas Q e Q' com base nas entradas
function calculateOutputs(pr, clr, d, clk) {
  let q, qn, observation;

  if (pr === 1 && clr === 1) {
    // Estado inválido
    q = 1;
    qn = 1;
    observation = "Estado inválido (PR e CLR ativos)";
  } else if (pr === 1) {
    // PR ativo
    q = 1;
    qn = 0;
    observation = "PR ativo (Q = 1)";
  } else if (clr === 1) {
    // CLR ativo
    q = 0;
    qn = 1;
    observation = "CLR ativo (Q = 0)";
  } else if (clk === 1) {
    // Clock ativo
    q = d;
    qn = !d;
    observation = "Clock ativo (Q = D)";
  } else {
    // Mantém o estado anterior
    q = 0; // Assume estado inicial
    qn = 1;
    observation = "Mantém estado anterior";
  }

  return { q, qn, observation };
}

// Função para gerar a tabela verdade
function generateTruthTable() {
  const truthTable = document.getElementById("truthTable");
  const inputs = [
    { pr: 0, clr: 0, d: 0, clk: 0 },
    { pr: 0, clr: 0, d: 0, clk: 1 },
    { pr: 0, clr: 0, d: 1, clk: 0 },
    { pr: 0, clr: 0, d: 1, clk: 1 },
    { pr: 0, clr: 1, d: 0, clk: 0 },
    { pr: 0, clr: 1, d: 0, clk: 1 },
    { pr: 0, clr: 1, d: 1, clk: 0 },
    { pr: 0, clr: 1, d: 1, clk: 1 },
    { pr: 1, clr: 0, d: 0, clk: 0 },
    { pr: 1, clr: 0, d: 0, clk: 1 },
    { pr: 1, clr: 0, d: 1, clk: 0 },
    { pr: 1, clr: 0, d: 1, clk: 1 },
    { pr: 1, clr: 1, d: 0, clk: 0 },
    { pr: 1, clr: 1, d: 0, clk: 1 },
    { pr: 1, clr: 1, d: 1, clk: 0 },
    { pr: 1, clr: 1, d: 1, clk: 1 },
  ];

  inputs.forEach((input) => {
    const { pr, clr, d, clk } = input;
    const { q, qn, observation } = calculateOutputs(pr, clr, d, clk);

    const row = document.createElement("tr");
    if (pr === 1 && clr === 1) {
      row.classList.add("invalid"); // Destaca estado inválido
    }

    row.innerHTML = `
        <td>${pr}</td>
        <td>${clr}</td>
        <td>${d}</td>
        <td>${clk}</td>
        <td>${q}</td>
        <td>${qn}</td>
        <td>${observation}</td>
      `;
    truthTable.appendChild(row);
  });
}

// Gera a tabela verdade ao carregar a página
generateTruthTable();

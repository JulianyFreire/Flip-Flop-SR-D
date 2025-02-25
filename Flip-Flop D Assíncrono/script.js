// Referências aos elementos
const dInput = document.getElementById('d-input');
const qValue = document.getElementById('q-value');
const qNotValue = document.getElementById('qnot-value');

// Função de atualização contínua
function updateOutput() {
  const dVal = parseInt(dInput.value) || 0; // Garante valor numérico
  qValue.textContent = dVal;
  qNotValue.textContent = dVal ? '0' : '1';
}

// Atualiza imediatamente ao detectar mudanças
dInput.addEventListener('input', updateOutput);

// Atualização inicial
updateOutput();
 // Função para adicionar animação à imagem do diagrama
 function animateImage(imgId) {
  const img = document.getElementById(imgId);
  img.classList.add('animate');
  setTimeout(() => { img.classList.remove('animate'); }, 500);
}

// Flip-Flop SR
let qSR = 0;
function updateSR() {
  const s = document.getElementById('s').checked;
  const r = document.getElementById('r').checked;
  
  if (s && !r) {
    qSR = 1; // Set
  } else if (!s && r) {
    qSR = 0; // Reset
  } else if (!s && !r) {
    // Mantém o estado anterior
  } else {
    alert('Condição inválida: S = 1 e R = 1');
    document.getElementById('s').checked = false;
    document.getElementById('r').checked = false;
    return;
  }
  
  document.getElementById('q-sr').textContent = qSR;
  document.getElementById('q-not-sr').textContent = qSR ? '0' : '1';
  
  // Animação na imagem do flip-flop SR
  animateImage('img-sr');
}
document.getElementById('s').addEventListener('change', updateSR);
document.getElementById('r').addEventListener('change', updateSR);

// Flip-Flop D Síncrono
function updateDSync() {
  const d = document.getElementById('d-sinc').checked;
  document.getElementById('q-d-sinc').textContent = d ? '1' : '0';
  document.getElementById('q-not-d-sinc').textContent = d ? '0' : '1';
  
  // Animação na imagem do flip-flop D Síncrono
  animateImage('img-d-sync');
}
document.getElementById('clk-btn').addEventListener('click', updateDSync);

// Flip-Flop D Assíncrono
function updateDAsync() {
  const d = document.getElementById('d-async').checked;
  document.getElementById('q-d-async').textContent = d ? '1' : '0';
  document.getElementById('q-not-d-async').textContent = d ? '0' : '1';
  
  // Animação na imagem do flip-flop D Assíncrono
  animateImage('img-d-async');
}
document.getElementById('d-async').addEventListener('change', updateDAsync);
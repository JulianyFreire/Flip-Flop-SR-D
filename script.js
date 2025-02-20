// Estado inicial do Flip-Flop SR
let qSR = 0;

// Atualiza automaticamente o Flip-Flop SR ao marcar/desmarcar S ou R
function updateSR() {
    let s = document.getElementById('s').checked;
    let r = document.getElementById('r').checked;

    if (s && !r) {
        qSR = 1; // Set (S = 1)
    } else if (!s && r) {
        qSR = 0; // Reset (R = 1)
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
}

// Atualiza automaticamente o Flip-Flop SR quando S ou R são alterados
document.getElementById('s').addEventListener('change', updateSR);
document.getElementById('r').addEventListener('change', updateSR);

// ========================== FLIP-FLOP D SÍNCRONO ==========================

// Atualiza o Flip-Flop D somente quando o botão Clock é pressionado
function updateDSync() {
    let d = document.getElementById('d-sinc').checked;
    document.getElementById('q-d-sinc').textContent = d ? '1' : '0';
    document.getElementById('q-not-d-sinc').textContent = d ? '0' : '1';
}

// Evento de clique no botão de clock para Flip-Flop D Síncrono
document.getElementById('clk-btn').addEventListener('click', updateDSync);

// ========================== FLIP-FLOP D ASSÍNCRONO ==========================

// Atualiza o Flip-Flop D Assíncrono sempre que D mudar
function updateDAsync() {
    let d = document.getElementById('d-async').checked;
    document.getElementById('q-d-async').textContent = d ? '1' : '0';
    document.getElementById('q-not-d-async').textContent = d ? '0' : '1';
}

// Evento de mudança no D para Flip-Flop D Assíncrono
document.getElementById('d-async').addEventListener('change', updateDAsync);

// Estado inicial do Flip-Flop SR
let qSR = 0;

// Função para atualizar o Flip-Flop SR automaticamente ao marcar/desmarcar S ou R
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

// Função para simular a borda de subida do Clock no Flip-Flop D
// Em um circuito digital real, o Flip-Flop D transfere o valor de D para Q somente quando o clock sobe (transição de 0 para 1).
function updateD() {
    let d = document.getElementById('d').checked;
    
    document.getElementById('q-d').textContent = d ? '1' : '0';
    document.getElementById('q-not-d').textContent = d ? '0' : '1';
}

// Simula o clock na borda de subida ao clicar no botão
document.getElementById('clk-btn').addEventListener('click', updateD);

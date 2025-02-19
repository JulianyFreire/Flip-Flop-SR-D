function updateSR() {
    let s = document.getElementById('s').checked;
    let r = document.getElementById('r').checked;
 
 
    // Lógica do SR
    if (s && !r) {
        document.getElementById('q-sr').textContent = '1';
        document.getElementById('q-not-sr').textContent = '0';
    } else if (!s && r) {
        document.getElementById('q-sr').textContent = '0';
        document.getElementById('q-not-sr').textContent = '1';
    } else if (!s && !r) {
        // Mantém o estado anterior
        // Esse comportamento é simulado, mas pode ser melhorado com um estado guardado.
    } else {
        alert('Condição inválida: S = 1 e R = 1');
    }
 }
 
 
 // Função para atualizar o Flip-Flop D (Síncrono)
 function updateD() {
    let d = document.getElementById('d').checked;
    let clk = document.getElementById('clk').checked;
 
 
    // Quando o clock (CLK) é ativado, o valor de D é transferido para Q
    if (clk) {
        document.getElementById('q-d').textContent = d ? '1' : '0';
        document.getElementById('q-not-d').textContent = d ? '0' : '1';
    }
 }
 
 
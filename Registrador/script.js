let dValues = [0, 0, 0, 0];
let qValues = [0, 0, 0, 0];

function toggleInput(bit) {
    dValues[bit] = dValues[bit] ? 0 : 1;
    updateDisplay();
}

function toggleClock() {
    document.querySelectorAll('.flip-flop').forEach(ff => ff.classList.add('pulse'));
    setTimeout(() => {
        qValues = [...dValues];
        updateDisplay();
        document.querySelectorAll('.flip-flop').forEach(ff => ff.classList.remove('pulse'));
    }, 250);
}

function reset() {
    dValues = [0, 0, 0, 0];
    qValues = [0, 0, 0, 0];
    updateDisplay();
}

function updateDisplay() {
    // Atualizar bits D
    dValues.forEach((val, idx) => {
        document.getElementById(`d${idx}`).style.backgroundColor = val ? '#0f0' : '#666';
    });
    
    // Atualizar bits Q
    qValues.forEach((val, idx) => {
        document.getElementById(`q${idx}`).style.backgroundColor = val ? '#0f0' : '#666';
        document.getElementById(`bit${idx}`).textContent = val;
    });
    
    // Atualizar display do registrador
    document.getElementById('registerValue').textContent = qValues.join('');
}

// Inicializar display
updateDisplay();
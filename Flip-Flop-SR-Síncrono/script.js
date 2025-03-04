let Q = 0;
let Qn = 1;
let clockWave = [];
let lastCLK = 0;

function processar() {
    const S = parseInt(document.getElementById('inputS').value);
    const R = parseInt(document.getElementById('inputR').value);
    const CLK = parseInt(document.getElementById('clk').value);

    clockWave.push(CLK);
    if (clockWave.length > 40) clockWave.shift();

    // Detectar borda de subida (0 -> 1)
    if (lastCLK === 0 && CLK === 1) {
        if (S === 1 && R === 0) {
            Q = 1;
            Qn = 0;
            mostrarImagem('flipflopSR'); // Imagem de Set
        } else if (S === 0 && R === 1) {
            Q = 0;
            Qn = 1;
            mostrarImagem('flipflopSR'); // Imagem de Reset
        } else if (S === 0 && R === 0) {
            // Mantém o estado anterior
            mostrarImagem('flipflopSR'); // Estado de memória
        } else if (S === 1 && R === 1) {
            // Estado proibido
            Q = 'X';
            Qn = 'X';
            mostrarImagem('flipflopSR'); // Estado inválido
        }
    }
    // Detectar borda de descida (1 -> 0) se necessário
    else if (lastCLK === 1 && CLK === 0) {
        mostrarImagem('flipflopSR2'); // Volta para imagem base
    }

    lastCLK = CLK;
    desenharOnda();
    document.getElementById('resQ').textContent = `Q: ${Q}`;
    document.getElementById('resQn').textContent = `Q̅: ${Qn}`;
}

function mostrarImagem(idImagem) {
    const imagens = document.querySelectorAll('.image-container img');
    imagens.forEach(img => img.style.display = 'none');
    
    const imagemAtiva = document.getElementById(idImagem);
    if (imagemAtiva) {
        imagemAtiva.style.display = 'block';
    }
}

function desenharOnda() {
    const canvas = document.getElementById('waveCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (clockWave.length === 0) return;

    ctx.beginPath();
    ctx.moveTo(0, clockWave[0] === 1 ? 30 : 120);

    for (let i = 0; i < clockWave.length; i++) {
        const x = i * 20;
        const y = clockWave[i] === 1 ? 30 : 120;
        const nextX = x + 20;

        ctx.lineTo(nextX, y);

        if (i < clockWave.length - 1 && clockWave[i] !== clockWave[i + 1]) {
            const nextY = clockWave[i + 1] === 1 ? 30 : 120;
            ctx.lineTo(nextX, nextY);
        }
    }

    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.stroke();
}


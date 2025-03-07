let Q = 0;
let Qn = 1;
let clockWave = [];
let lastCLK = 0;

function processar() {
    const D = parseInt(document.getElementById('inputD').value);
    const CLK = parseInt(document.getElementById('clk').value);

    clockWave.push(CLK);
    if (clockWave.length > 40) clockWave.shift();

    // Borda de subida (0 -> 1) 
    if (lastCLK === 0 && CLK === 1) {
        Q = D;
        Qn = Q === 1 ? 0 : 1;
        mostrarImagem('flipflopD');
    }

    // Borda de descida (1 -> 0)
    if (lastCLK === 1 && CLK === 0) {
        mostrarImagem('flipflopD2');
    }

    lastCLK = CLK;

    desenharOnda();
    document.getElementById('resQ').textContent = `Res: ${Q}`;
    document.getElementById('resQn').textContent = `Res: ${Qn}`;
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
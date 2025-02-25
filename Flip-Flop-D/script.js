let Q = 0;
        let Qn = 1;
        let clockWave = [];

        function processar() {
            const D = parseInt(document.getElementById('inputD').value);
            const CLK = parseInt(document.getElementById('clk').value);

            clockWave.push(CLK);
            if (clockWave.length > 40) clockWave.shift();

            if (CLK === 1) {
                Q = D;
                Qn = Q === 1 ? 0 : 1;
            }

            desenharOnda();
            document.getElementById('resQ').textContent = `Res: ${Q}`;
            document.getElementById('resQn').textContent = `Res: ${Qn}`;
        }

        function desenharOnda() {
            const canvas = document.getElementById('waveCanvas');
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.moveTo(0, 75);
            
            for (let i = 0; i < clockWave.length; i++) {
                const x = i * 20;
                const y = clockWave[i] === 1 ? 30 : 120;
                
                if (i > 0) {
                    ctx.lineTo(x, clockWave[i - 1] === 1 ? 30 : 120); 
                }
                ctx.lineTo(x, y); 
            }
            
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
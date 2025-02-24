let Q = 0;
        let Qn = 1;

        function processar() {
            const D = parseInt(document.getElementById('inputD').value);
            const CLK = parseInt(document.getElementById('clk').value);

            if (CLK === 1) {
                Q = D;
                Qn = Q === 1 ? 0 : 1;
            }

            document.getElementById('resQ').textContent = `Res: ${Q}`;
            document.getElementById('resQn').textContent = `Res: ${Qn}`;
        }
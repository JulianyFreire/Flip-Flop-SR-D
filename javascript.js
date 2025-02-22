function processar() {
    let s = parseInt(document.getElementById("s").value);
    let r = parseInt(document.getElementById("r").value);
    let q, q_bar;

    if (s === 1 && r === 1) {
        q = "Inválido";
        q_bar = "Inválido";
    } else if (s === 0 && r === 0) {
        q = "Memória";
        q_bar = "Memória";
    } else if (s === 1 && r === 0) {
        q = 1;
        q_bar = 0;
    } else if (s === 0 && r === 1) {
        q = 0;
        q_bar = 1;
    }

    document.getElementById("q").innerText = q;
    document.getElementById("q_bar").innerText = q_bar;
}
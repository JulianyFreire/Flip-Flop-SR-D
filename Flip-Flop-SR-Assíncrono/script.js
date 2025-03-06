function processar() {
  let S = parseInt(document.getElementById("S").value);
  let R = parseInt(document.getElementById("R").value);
  let Q = document.getElementById("Q");
  let Qbar = document.getElementById("Qbar");

  if (S === 1 && R === 1) {
    Q.textContent = "?";
    Qbar.textContent = "?";
  } else if (S === 1 && R === 0) {
    Q.textContent = "1";
    Qbar.textContent = "0";
  } else if (S === 0 && R === 1) {
    Q.textContent = "0";
    Qbar.textContent = "1";
  } else {
    // Mantém o estado anterior (não altera os valores)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btnContraste = document.getElementById("btn-contraste");
  const btnAumentar = document.getElementById("btn-aumentar-texto");
  const btnDiminuir = document.getElementById("btn-diminuir-texto");

  let tamanhoAtualFonte = 100;

  // Alternar Contraste
  if (btnContraste) {
    btnContraste.addEventListener("click", () => {
      document.body.classList.toggle("alto-contraste");
    });
  }

  // Aumentar Fonte
  if (btnAumentar) {
    btnAumentar.addEventListener("click", () => {
      if (tamanhoAtualFonte < 150) {
        tamanhoAtualFonte += 10;
        document.documentElement.style.setProperty('--tamanho-fonte', `${tamanhoAtualFonte}%`);
      }
    });
  }

  // Diminuir Fonte
  if (btnDiminuir) {
    btnDiminuir.addEventListener("click", () => {
      if (tamanhoAtualFonte > 80) {
        tamanhoAtualFonte -= 10;
        document.documentElement.style.setProperty('--tamanho-fonte', `${tamanhoAtualFonte}%`);
      }
    });
  }
});
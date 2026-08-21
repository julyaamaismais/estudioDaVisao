document.addEventListener("DOMContentLoaded", () => {
  const btnContraste = document.getElementById("btn-contraste");
  const btnAumentar = document.getElementById("btn-aumentar-texto");
  const btnDiminuir = document.getElementById("btn-diminuir-texto");

  let tamanhoAtualFonte = 100;

  // Lógica do Alto Contraste
  const alternarContraste = (ativar) => {
    document.body.classList.toggle("alto-contraste", ativar);
    if (btnContraste) {
      btnContraste.setAttribute("aria-pressed", ativar);
    }
    localStorage.setItem("altoContraste", ativar);
  };

  // Mantém o estado ativo ao recarregar a página
  const contrasteSalvo = localStorage.getItem("altoContraste") === "true";
  if (contrasteSalvo) {
    alternarContraste(true);
  }

  if (btnContraste) {
    btnContraste.addEventListener("click", () => {
      const estaAtivo = document.body.classList.contains("alto-contraste");
      alternarContraste(!estaAtivo);
    });
  }

  // Lógica de Redimensionamento do Texto
  if (btnAumentar) {
    btnAumentar.addEventListener("click", () => {
      if (tamanhoAtualFonte < 150) {
        tamanhoAtualFonte += 10;
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
      }
    });
  }

  if (btnDiminuir) {
    btnDiminuir.addEventListener("click", () => {
      if (tamanhoAtualFonte > 90) {
        tamanhoAtualFonte -= 10;
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
      }
    });
  }
});
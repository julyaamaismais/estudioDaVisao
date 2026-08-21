document.addEventListener("DOMContentLoaded", () => {
  // 1. Injeta os estilos do Alto Contraste diretamente via JS no <head>
  const estilo = document.createElement("style");
  estilo.textContent = `
    body.alto-contraste,
    body.alto-contraste * {
      background-color: #000000 !important;
      color: #ffff00 !important;
      border-color: #ffffff !important;
    }
    body.alto-contraste a {
      color: #00ffff !important;
      text-decoration: underline !important;
    }
    body.alto-contraste button {
      background-color: #ffffff !important;
      color: #000000 !important;
    }
  `;
  document.head.appendChild(estilo);

  // 2. Elementos dos botões
  const btnContraste = document.getElementById("btn-contraste");
  const btnAumentar = document.getElementById("btn-aumentar-texto");
  const btnDiminuir = document.getElementById("btn-diminuir-texto");

  let tamanhoAtualFonte = 100;

  // 3. Lógica do Alto Contraste com persistência
  const alternarContraste = (ativar) => {
    document.body.classList.toggle("alto-contraste", ativar);
    if (btnContraste) {
      btnContraste.setAttribute("aria-pressed", ativar);
    }
    localStorage.setItem("altoContraste", ativar);
  };

  // Restaura estado salvo no navegador
  if (localStorage.getItem("altoContraste") === "true") {
    alternarContraste(true);
  }

  if (btnContraste) {
    btnContraste.addEventListener("click", () => {
      const estaAtivo = document.body.classList.contains("alto-contraste");
      alternarContraste(!estaAtivo);
    });
  }

  // 4. Lógica de redimensionamento do texto
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
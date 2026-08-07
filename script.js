//Botoes de acessibilidades 
document.addEventListener("DOMContentLoaded,() =>{
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    //aumentar a fonte

    let tamanhoAtualFonte = 100;

    //função alto contraste

    btnContraste.addEventListener("click",() ) =>{

    document.body.classList.toogle("alto-contraste");

    //acessibilidade para leitores de tela

    const ativas = document.body.classList.contains("alto-contrastes");
    btnContrast.setAttibute("aria-pressed",ativo);

    )
}
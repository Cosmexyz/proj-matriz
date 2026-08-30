const quadrado = document.querySelector(".quadrado")

const matriz = [
    [2, 0, 0],
    [0, 2, 0],
    [0, 0, 1]

]

const larguraInicial = quadrado.offsetWidth;
const alturaInicial = quadrado.offsetHeight;

const larguraFinal = matriz[0][0] * larguraInicial;
const alturaFinal = matriz[1][1] * alturaInicial;

export {larguraFinal, alturaFinal, alturaInicial, larguraInicial}
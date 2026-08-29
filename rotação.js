const quadrado = document.querySelector(".quadrado")

const posição = quadrado.getBoundingClientRect()

const angulo = 90 * Math.PI / 180;

const matrizRotação = [
    [Math.cos(angulo), -Math.sin(angulo), 0],
    [Math.sin(angulo), Math.cos(angulo), 0],
    [0, 0, 1]
]

const centroX = posição.x + posição.width / 2;
const centroY = posição.y + posição.height / 2;

// RI = rotação Inicial
const pontoRI = [
    [posição.x = centroX + (x - centroX).cos(angulo) - (y - centroY).sin(angulo)],
    [posição.y = centroY + (x - centroX).sin(angulo) + (y - centroY).sin(angulo)],
    [1]
]

function multiplicar(matrizRotação, pontoRI){
    const x =
    matrizRotação[0][0] * pontoRI [0][0] + 
    matrizRotação[0][1] * pontoRI [1][0] +
    matrizRotação[0][2] * pontoRI [2][0];

    const y =
    matrizRotação[1][0] * pontoRI [0][0] + 
    matrizRotação[1][1] * pontoRI [1][0] +
    matrizRotação[1][2] * pontoRI [2][0];

    const h =
    matrizRotação[2][0] * pontoRI [0][0] + 
    matrizRotação[2][1] * pontoRI [1][0] +
    matrizRotação[2][2] * pontoRI [2][0];

    return[
    [x],
    [y],
    [h]

    ]
}

const resultado = multiplicar(matrizRotação, pontoRI)

// RF = rotação final
const pontoRF = resultado

export {pontoRI, pontoRF}
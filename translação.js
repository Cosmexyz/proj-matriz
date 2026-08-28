const quadrado = document.querySelector(".quadrado")

const posição = quadrado.getBoundingClientRect()

const matriz = [
    [1, 0, 100],
    [0, 1, 50],
    [0, 0, 1],
] 

const pontoI = [
    [posição.x ],
    [posição.y],
    [1]
];

function multiplicar(matriz, pontoI) {
    const x =
    matriz[0][0] * pontoI[0][0] +
    matriz[0][1] * pontoI[1][0] +
    matriz[0][2] * pontoI[2][0];

    const y =
     matriz[1][0] * pontoI[0][0]
   + matriz[1][1] * pontoI[1][0]
   + matriz[1][2] * pontoI[2][0];

   const h =
     matriz[2][0] * pontoI[0][0]
   + matriz[2][1] * pontoI[1][0]
   + matriz[2][2] * pontoI[2][0];

   return[
    [x],
    [y],
    [h]
]
}


const resultado = multiplicar(matriz, pontoI)

const pontoF = resultado

export{pontoF};
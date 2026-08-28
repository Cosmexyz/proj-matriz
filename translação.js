const quadrado = document.querySelector(".quadrado")

//const posição = quadrado.getBoundingClientRect()

const matriz = [
    [1, 0, 100],
    [0, 1, 50],
    [0, 0, 1],
] 
// TI = transação Inicial
const pontoTI = [
    [posição.x ],
    [posição.y],
    [1]
];

function multiplicar(matriz, pontoTI) {
    const x =
    matriz[0][0] * pontoTI[0][0] +
    matriz[0][1] * pontoTI[1][0] +
    matriz[0][2] * pontoTI[2][0];

    const y =
     matriz[1][0] * pontoTI[0][0]
   + matriz[1][1] * pontoTI[1][0]
   + matriz[1][2] * pontoTI[2][0];

   const h =
     matriz[2][0] * pontoTI[0][0]
   + matriz[2][1] * pontoTI[1][0]
   + matriz[2][2] * pontoTI[2][0];

   return[
    [x],
    [y],
    [h]
]
}


const resultado = multiplicar(matriz, pontoTI)

// TF = translação Final
const pontoTF = resultado

export{pontoTF, pontoTI};

const quadrado = document.querySelector(".quadrado")

const refletir = () => {
const posição = quadrado.getBoundingClientRect() 

const matriz = [
    [1, 0, 0],
    [0, -1, 0],
    [0, 0, 1]

]
    
    const escalaX = matriz[0][0];
    const escalaY = matriz[1][1];


    quadrado.style.transform = `scale(${escalaX}, ${escalaY})`;

}

export {refletir}
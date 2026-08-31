const quadrado = document.querySelector(".quadrado")

const matriz = [
    [1, 0.5, 0],
    [0, 1, 0],
    [0, 0, 1]
]

const cisalhar = () => {
    const k = matriz[0][1];
    quadrado.style.transform = `skewX(${k}rad)`;
}

export {cisalhar} 
const quadrado = document.querySelector(".quadrado")
const LarguraQuadrado = quadrado.offsetWidth
const posicaoFinal = window.innerWidth - LarguraQuadrado 

document.addEventListener('keydown', function(event) {
    if (event.key == 'a') 
        quadrado.classList.add('deslizando')
    })

   
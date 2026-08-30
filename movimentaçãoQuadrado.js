const quadrado = document.querySelector(".quadrado")

import { pontoTF, pontoTI } from "./translação.js";
import {angulo} from "./rotação.js";
import {alturaFinal, larguraFinal, larguraInicial, alturaInicial} from "./escala.js";

let noPontoTF = false;
let noPontoRF = false;
let noPontoEF = false;

document.addEventListener('keydown', function(event) {

    //ComeçoMovimentaçãoTranslação
    if (event.key == '1') {

        if(noPontoTF == false) {
           
            quadrado.style.left = pontoTF[0][0] + "px";
            quadrado.style.top = pontoTF[1][0] + "px";

        noPontoTF = true;

        }else{

            quadrado.style.left = pontoTI[0][0] + "px";
            quadrado.style.top = pontoTI[1][0] + "px";

        noPontoTF = false;
        
        }}
    //TerminoMovimentaçãoTranslação

    //ComeçoMovimentaçãoRotação
    if(event.key == '2'){

        if(noPontoRF == false){

            quadrado.style.transform = `rotate(${angulo}rad)`;

        noPontoRF = true;

        }else{

             quadrado.style.transform = `rotate(0rad)`;
        
        
        noPontoRF = false;
    
        }}
    //TerminoMovimentaçãoRotação

    //ComeçoEscala
    if(event.key == '3'){

        if(noPontoEF == false) {

            quadrado.style.width = larguraFinal + "px";
            quadrado.style.heigth = alturaFinal + "px";

        noPontoEF = true;

    }else {

            quadrado.style.width = larguraInicial + "px";
            quadrado.style.heigth = alturaInicial + "px";

        noPontoEF = false;

    }}
    //TerminoEscala



    })


        noPontoRF = false;
    //TerminoMovimentaçãoRotação

        }}
    })

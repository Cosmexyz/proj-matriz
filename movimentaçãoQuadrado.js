const quadrado = document.querySelector(".quadrado")

import { pontoTF, pontoTI } from "./translação.js";
import { pontoRF, pontoRI } from "./rotação.js";

let noPontoTF = false;
let noPontoRF = false;

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

            quadrado.style.left = pontoRF[0][0] + "px";
            quadrado.style.top = pontoRF[1][0] + "px";
        
        noPontoRF = true;

        }else{

            quadrado.style.left = pontoRI[0][0] + "px";
            quadrado.style.top = pontoRI[1][0] + "px";
        
        noPontoRF = false;
      //TerminoMovimentaçãoRotação
        }}
    })


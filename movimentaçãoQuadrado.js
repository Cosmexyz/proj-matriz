const quadrado = document.querySelector(".quadrado")

import { pontoF, pontoI } from "./translação.js";

let noPontoF = false;

document.addEventListener('keydown', function(event) {

    //ComeçoMovimentaçãoTranslação
    if (event.key == '1') {

        if(noPontoF == false) {
           
            quadrado.style.left = pontoF[0][0] + "px";
            quadrado.style.top = pontoF[1][0] + "px";

        noPontoF = true;

        }else{

            quadrado.style.left = pontoI[0][0] + "px";
            quadrado.style.top = pontoI[1][0] + "px";

        noPontoF = false;
        
        }}
    //TerminoMovimentaçãoTranslação


    })
   

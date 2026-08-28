const quadrado = document.querySelector(".quadrado")

import { pontoTF, pontoTI } from "./translação.js";

let noPontoTF = false;

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


    })

   

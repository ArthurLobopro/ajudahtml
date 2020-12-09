//Target
var msg = document.getElementById("msg-target")
            let link_t = document.getElementById("link-target")
            let target_s = document.getElementById("target")
            function escreve_self() {
                msg.innerText="Este link será aberto na mesma guia."
                link_t.target="_self"
                target_s.innerText="_self"
            }
            function escreve_blank() {
                msg.innerText="Este link será aberto em nova guia."
                link_t.target="_blank"
                target_s.innerText="_blank"
            }
//Style
var link = document.getElementById("link-color")
function troca_cor(cor){
    let text_color = document.getElementById("color")
    text_color.innerText=cor
    link.style.color=cor
}
function troca_cor_fundo(cor){
    let text_bgcolor = document.getElementById("bg-color")
    text_bgcolor.innerText=cor
    link.style.backgroundColor=cor
}
function txtDecoration(valor){
    let text_deco = document.getElementById("txt-decor")
    text_deco.innerText=valor
    link.style.textDecoration=valor
    let text_decoStl = document.getElementsByName("tdecstl")
    for(i=0;i<6;i++){
        if (text_decoStl[i].checked){
            switch (i) {
                case 1:
                    link.style.textDecoration+=" dashed"
                    break
                case 2:
                    link.style.textDecoration+=" dotted"
                    break
                case 3:
                    link.style.textDecoration+=" double"
                    break
                case 4:
                    link.style.textDecoration+=" wavy"
                    break
                case 5:
                    link.style.textDecoration+=" initial"
                    break
            }
        }
    }
}
function txtDecorationStl(valor){
    let text_decoStl = document.getElementById("txt-decor-st")
    text_decoStl.innerText=valor
    link.style.textDecorationStyle=valor
}
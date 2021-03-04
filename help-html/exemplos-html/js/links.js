const get = id => document.getElementById(id)

//Target
const msg = get("msg-target")
const escreve_target = event => {
    const link_t = get("link-target")
    const target_s = get("target")
    const target = event.target.dataset.target
    link_t.target=target
    target_s.innerText=target
}
const target_inputs = document.getElementsByName("target")
for(let e of target_inputs){ e.onclick = escreve_target }

//Style
const link = get("link-color")
const troca_cor = event => {
    const cor = event.target.value
    get("color").innerText = cor
    link.style.color=cor
}
const troca_background = event => {
    const cor = event.target.value
    get("bg-color").innerText=cor
    link.style.backgroundColor=cor
}
const txtDecoration = event => {
    const style = event.target.value
    get("txt-decor-line").innerText = style
    link.style.textDecorationLine = style
}
const txtDecorationStl = event => {
    const style = event.target.value
    get("txt-decor-st").innerText = style
    link.style.textDecorationStyle= style
}
const color_inputs = document.getElementsByName("color")
for(let e of color_inputs){ e.onclick = troca_cor }

const bgcolor_inputs = document.getElementsByName("bgcolor")
for(let e of bgcolor_inputs){ e.onclick = troca_background }

const tdec_input = document.getElementsByName("tdec")
for(let e of tdec_input){ e.onclick = txtDecoration }

const tdecstl_input = document.getElementsByName("tdecstl")
for(let e of tdecstl_input){ e.onclick = txtDecorationStl }
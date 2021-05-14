import { get, copy } from "../../../public/js/modules/util.js";

function expandAndMinimize(event){
    let target = event.target
    const parent = target.parentElement
    const after = target.parentElement.previousElementSibling
    target.classList.toggle('rotated')

    const element = get(target.dataset.target)
    const display = element.style.display
    element.style.display = display == 'none' ? '' : 'none'
}
const expand_images = document.querySelectorAll('li > img')
for(let e of expand_images){ e.onclick = expandAndMinimize }

const trocaFull = event => {
    const value = String(event.target.value).trim().split(' ')
    const name = event.target.dataset.name
    const laterais = document.getElementsByName(name)

    switch (value.length) {
        case 1:
            for(let i of laterais){ i.value = value[0]}
            break
        case 2:
            laterais[0].value = value[0]
            laterais[1].value = value[1]
            laterais[2].value = value[0]
            laterais[3].value = value[1]
            break
        case 3: 
            laterais[0].value = value[0]
            laterais[1].value = value[1]
            laterais[2].value = value[2]
            laterais[3].value = value[1]
            break
        default:
            laterais[0].value = value[0]
            laterais[1].value = value[1]
            laterais[2].value = value[2]
            laterais[3].value = value[3]
            break
    }
    get("div-cobaia").style[`border${name}`]= value.join(' ')
    get(name.toLowerCase()).innerText= value.join(' ')
}

const trocaLateral = event => {
    const target = event.target
    const lado = target.dataset.lado
    const style = String(target.name)
    const value = target.value
    const main_input = get(`border-${style.toLowerCase()}`)
    //laterais
    let e = document.getElementsByName(style)
    let l = []
    for(let i in e){ l.push(e[i].value) }
    if(l[0] == l[1] && l[1] == l[2] && l[2] == l[3]){
        main_input.value = l[0]
    }else if(l[0] == l[2] && l[1] == l[3]){
        main_input.value = `${l[0]} ${l[1]}`
    }else if(l[1] == l[3]){
        main_input.value = `${l[0]} ${l[1]} ${l[2]}`
    }else{
        main_input.value = `${l[0]} ${l[1]} ${l[2]} ${l[3]}`
    }
    const eventLoad = new InputEvent('input')
    main_input.dispatchEvent(eventLoad)
    get("div-cobaia").style[`border${lado}${style}`] = value
}

const border_style_select = get('border-style')
border_style_select.oninput = trocaFull

const border_color_input = get('border-color')
border_color_input.oninput = trocaFull

const border_width_input = get('border-width')
border_width_input.oninput = trocaFull

const border_radius_input = get('border-radius')
border_radius_input.oninput = trocaFull

const laterais = document.querySelectorAll('ul > ul > li')
for(let e of laterais){ e.onchange = trocaLateral }

const copyToClipboard = event => {
    let element = document.querySelector("table.exemplo")
    let text = String(element.innerText)
    text = text.replace(/[0-9]\n/g,"")
    copy(text)
}
const copyButton = document.querySelector("h2 > img")
copyButton.onclick = copyToClipboard
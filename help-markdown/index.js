const html = document.getElementById('html')
const mark = document.getElementById('mark')
const li_html = document.getElementById('li-html')
const li_mark = document.getElementById('li-mark')
function  troca(name) {
    const clicked = document.getElementById(`li-${name}`)
    
    if(clicked.classList.contains('focus')==false){
        li_html.classList.toggle('focus')
        li_mark.classList.toggle('focus')
        html.classList.toggle('visible')
        mark.classList.toggle('visible')
        html.classList.toggle('invisible')
        mark.classList.toggle('invisible')
    }
}
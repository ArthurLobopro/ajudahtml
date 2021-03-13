const get = id => document.getElementById(id)
const querySelector = str => document.querySelector(str)
// function mostra_esconde(object1,object2) {
//     $(object1).toggle(500)
//     $(object2).toggleClass('no-rotated')
//     $(object2).toggleClass('rotated')
// }

// document.body.onload = ()=>{
//     const delay = document.querySelectorAll('.no-rotated')
//     setTimeout(() => {
//         for(i in delay){
//             delay[i].classList.remove('delay-1')
//         }
//     }, 2000)
// }
function expandAndMinimize(event){
    let target = event.target.tagName !== 'IMG' ? event.target : event.target.parentElement
    target.children[0].classList.toggle('rotated')

    const element = querySelector(`.${target.dataset.target}`)
    console.log(element);
    const display = element.style.display
    element.style.display = display == 'none' ? '' : 'none'
}
const titles = document.getElementsByTagName('h2')
for(let e of titles){ e.onclick = expandAndMinimize }
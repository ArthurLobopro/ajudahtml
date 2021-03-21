import { get } from "./util.js";

const expandAndMinimize = event => {
    let target = event.target.tagName !== 'IMG' ? event.target : event.target.parentElement
    target.children[0].classList.toggle('rotated')

    const element = get(target.dataset.target)
    element.classList.toggle('invisible')
}

const show = event =>{
    let e = get(event.target.parentElement.dataset.target)
	
    if(get(e.dataset.target).classList.contains('invisible')){
        e.click()
    }
	e = e.nextElementSibling
	window.scroll(0, (e.offsetTop - (window.innerHeight/2 - e.offsetHeight/2)))
}
export { expandAndMinimize, show }
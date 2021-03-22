import { troca, lerTema} from "./modules/tema.js"
import { expandAndMinimize, show } from "./modules/expand.js"
import { get, querySelector } from "./modules/util.js"

//Detecção de eventos

document.body.onload = ()=> {
	lerTema()
	document.body.style.display = ""
}

const titles = document.getElementsByTagName('h2')
for(let e of titles){ e.onclick = expandAndMinimize }

const buttons = document.querySelectorAll("nav > ul > li")
for(let e of buttons){ e.onclick = show }

const theme_button = querySelector('.theme-button')
theme_button.onclick = troca

const circle = querySelector('.circle')

setTimeout(() => {
	circle.classList.remove('ad-2s')
}, 1000);
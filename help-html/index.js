import { troca, lerTema} from "../public/scripts/tema.js"
import { expandAndMinimize, show } from "../public/scripts/expand.js"
import { get, querySelector } from "../public/scripts/util.js"

//Detecção de eventos

document.body.onload = ()=> {
	lerTema()
	document.body.style.display = ""
}

const titles = document.getElementsByTagName('h2')
for(let e of titles){ e.onclick = expandAndMinimize }

const buttons = document.querySelectorAll("nav > ul > a")
for(let e of buttons){ e.onclick = show }

const theme_button = querySelector('.theme-button')
theme_button.onclick = troca

const circle = querySelector('.circle')

setTimeout(() => {
	circle.classList.remove('ad-2s')
}, 1000);
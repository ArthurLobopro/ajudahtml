function troca(){
	const circle = document.querySelector('.circle')
	if(tema == "white"){
		circle.classList.toggle('left')
		circle.classList.toggle('right')
	}else{
		circle.classList.toggle('right')
		circle.classList.toggle('left')
	}
	troca_tema()
}

const troca_tema = () => {
	tema = tema == "white" ? "dark" : "white"
	set_tema()
}

const lerTema = () =>{
	if(localStorage.tema == undefined){
		criaTema()
	}else{
		tema = localStorage.tema
	}
	set_tema()
	btn_class()
}

const criaTema = () => {
	localStorage.tema = tema
}

let tema = 'white'

const set_tema = () => {
	if(tema=="white"){
		document.getElementById("cores").href="css/theme-white.css"
		document.getElementById("cabecalho").href="../public/css/cabecalho-white.css"
	}else{
		document.getElementById("cores").href="css/theme-dark.css"
		document.getElementById("cabecalho").href="../public/css/cabecalho-dark.css"
	}
	criaTema()
}

const classe = {
	white: "left", dark: "right"
}

const btn_class = () => {
	const circle = document.querySelector(".circle")
	circle.classList.add(classe[tema])
}
export { troca, lerTema }
let tema = "white"
function verifica(){
	let hora = new Date().getHours
	if(hora>20){
	trocatema()
	}
}

const troca_tema = () => {
	tema = tema == "white" ? "dark" : "white"
	set_tema()
}
const set_tema = () => {
	if(tema=="white"){
		document.getElementById("cores").href="css/tabela-html-white.css"
		document.getElementById("cabecalho").href="../css/cabecalho-white.css"
	}else{
		document.getElementById("cores").href="css/tabela-html-dark.css"
		document.getElementById("cabecalho").href="../css/cabecalho-dark.css"
	}
	criaTema()
}
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
setTimeout(() => {
	document.querySelector('.circle').classList.remove('ad-2s')
}, 1000);
function lerTema(){
	if(localStorage.tema == undefined){
		criaTema()
	}else{
		tema = localStorage.tema
	}
	set_tema()
	btn_class()
}
function criaTema(){
	localStorage.tema = tema
}
const classe = {
	white: "left", dark: "right"
}
const btn_class = () => {
	const circle = document.querySelector(".circle")
	circle.classList.add(classe[tema])
}
document.addEventListener("DOMContentLoaded",() => {  
	lerTema() 
}, false)
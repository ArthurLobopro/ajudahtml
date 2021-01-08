var teme=1
function verifica(){
	let hora = new Date().getHours
	if(hora>20){
	trocatema()
	}
}

function tema(){
	let home=document.getElementById("home")
	if(teme==1){
	document.getElementById("cores").href="css/tabela-html-white.css"
	document.getElementById("cabecalho").href="../css/cabecalho-white.css"
	}else{
	document.getElementById("cores").href="css/tabela-html-dark.css"
	document.getElementById("cabecalho").href="../css/cabecalho-dark.css"
	}
}
function trocatema(){
	if(teme==1){
		teme=2
	}else{
		teme=1
	}
	tema()
}
function troca(){
	const circle = document.querySelector('.circle')
	circle.classList.toggle('left')
	circle.classList.toggle('right')
	trocatema()
}
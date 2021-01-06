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
	document.getElementById("cabecalho").href="../css/cabecalho.css"
	home.src="../midia/home_white.png"
	}else{
	document.getElementById("cores").href="css/tabela-html-dark.css"
	document.getElementById("cabecalho").href="../css/cabecalho-dark.css"
	home.src="../midia/home_black.png"
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
function troca_home(num){
	let home=document.getElementById("home")
	if(teme==2 && num==1){
		home.src="../midia/home_white.png"
	}
	if(teme==2 && num==2){
		home.src="../midia/home_black.png"
	}
}
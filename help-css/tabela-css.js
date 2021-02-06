function mostra_esconde(object1,object2) {
    $(object1).toggle(500)
    $(object2).toggleClass('no-rotated')
    $(object2).toggleClass('rotated')
}

document.body.onload = ()=>{
    const delay = document.querySelectorAll('.no-rotated')
    setTimeout(() => {
        for(i in delay){
            delay[i].classList.remove('delay-1')
        }
    }, 2000)
}
function mostra_esconde(object1,object2) {
    $(object1).toggle(500)
    $(object2).toggleClass('no-rotated')
    $(object2).toggleClass('rotated')
}
//Aparecer e esconder menu
var menuStt = false
function abrirFecharMenu() {
    if(menuStt == false) {
        document.querySelector('#menu').style.display = 'block'
        menuStt = true
    } else {
        document.querySelector('#menu').style.display = 'none'
        menuStt = false
    }
}


//ajuste da fonte
var letraPeq = document.querySelector('#letra_min')
var letraMed = document.querySelector('#letra_med')
var letraMax = document.querySelector('#leta_max')

function fonte(tamanho) {
    document.getElementsByTagName('body')[0].style.fontSize = tamanho
}
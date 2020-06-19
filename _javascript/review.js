//Melhor exibição em smartphones
var alturaAside = document.querySelector('#outros_reviews').clientHeight
if(window.innerWidth <= 500) {
    document.querySelector('#review').style.width = '100%'
    document.querySelector('#corpo').style.paddingBottom = alturaAside+'px'
}

//Expandir imagens
function expandirImagem(url) {
    document.querySelector('#expandida_img').src = url
    document.querySelector('#expandida_img').style.display = 'block'
    document.querySelector('#fechar_expandida').style.display = 'block'
    document.querySelector('#expandida_background_img').style.display = 'block'
}

function fecharExpandida() {
    document.querySelector('#expandida_img').style.display = 'none'
    document.querySelector('#fechar_expandida').style.display = 'none'
    document.querySelector('#expandida_background_img').style.display = 'none'
}
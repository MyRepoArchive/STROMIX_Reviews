function fecharAlerta() { //fecha o alerta do topo
    document.querySelector('#fechar_alerta_img').style.background = 'rgba(255, 255, 255, 0.5)'//coloca um background esbraquiçado na imagem de "X"
    document.querySelector('#fechar_alerta_img').style.transition = '50ms'//Delay de 50milisegundos entre o background estar invisível até ele ficar completamente visível
    setTimeout(//seta um tempo de espera antes de executar o comando! Neste caso de 50milisegundos
        function() {
            document.querySelector('#alerta').style.display = 'none' //Deixa o alerta como não mostrado na página, atravez da linha de style "display: none;"
        }, 50 //tempo do "setTimeout"
    )
}

//Aqui ajusta o tamanho do nome do site de acordo com a resolução da tela em que está sendo exibido o código!
let nomeSite = document.querySelector('#nome')
if(screen.width < 409 && screen.width >= 326) {
    nomeSite.style.fontSize = '20pt'
    nomeSite.style.marginTop = '-52px'
} else if(screen.width < 326) {
    nomeSite.style.fontSize = '17pt'
    nomeSite.style.marginTop = '-48px'
}

//Mostra a idade correta do criador de acordo com o ano
const data = new Date()
if(data.getUTCMonth() < 5) {
    document.querySelector('#idade_direita').innerHTML = `${data.getFullYear() - 2005}`
} else {
    document.querySelector('#idade_direita').innerHTML = `${data.getFullYear() - 2004}`
}

//Mostra ou esconde o menu do perfil do criador
var estado = false
var perfil = document.querySelector('#perfil_criador')
function abrirFecharPerfil() {
    if(estado == false) {
        perfil.style.display = 'block'
        estado = true
    } else {
        perfil.style.display = 'none'
        estado = false
    }
}

var letraPeq = document.querySelector('#min')
var letraMed = document.querySelector('#med')
var letraMax = document.querySelector('#max')

function fonte(tamanho) {
    document.getElementsByTagName('body')[0].style.fontSize = tamanho
    if(tamanho == '100%') {
        letraPeq.style.background = 'white'
        letraPeq.style.color = '#5b94ff'
        letraMed.style.background = '#5b94ff'
        letraMed.style.color = 'white'
        letraMax.style.background = '#5b94ff'
        letraMax.style.color = 'white'
    } else if(tamanho == '130%') {
        letraPeq.style.background = '#5b94ff'
        letraPeq.style.color = 'white'
        letraMed.style.background = 'white'
        letraMed.style.color = '#5b94ff'
        letraMax.style.background = '#5b94ff'
        letraMax.style.color = 'white'
    } else {
        letraPeq.style.background = '#5b94ff'
        letraPeq.style.color = 'white'
        letraMed.style.background = '#5b94ff'
        letraMed.style.color = 'white'
        letraMax.style.background = 'white'
        letraMax.style.color = '#5b94ff'
    }
}
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
    nomeSite.getElementsByTagName('span')[0].style.fontSize = '12pt'
} else if(screen.width < 326) {
    nomeSite.style.fontSize = '17pt'
    nomeSite.style.marginTop = '-48px'
    nomeSite.getElementsByTagName('span')[0].style.fontSize = '8pt'
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
    console.log('clicado')
    if(estado == false) {
        console.log('abrir')
        perfil.style.display = 'block'
        estado = true
        console.log(estado)
    } else {
        console.log('reclicado')
        perfil.style.display = 'none'
        estado = false
        console.log(estado)
    }
}

function clicarBotao() {
    document.querySelector('#perfil_menu_img').style.background = 'rgba(255, 255, 255, 0.5)'
}

function soltarBotao() {
    document.querySelector('#perfil_menu_img').style.background = 'rgba(255, 255, 255, 0.3)'
}

function sairBotao() {
    document.querySelector('#perfil_menu_img').style.background = 'none'
}

function entrarBotao() {
    document.querySelector('#perfil_menu_img').style.background = 'rgba(255, 255, 255, 0.3)'
}
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


//Função de verificar arquivo que está sendo exibido na tela
function verificarArquivo(url) {
    url = url.replace(/\/g/, "/")
    var arquivo = url.substring(url.lastIndexOf('/') + 1)
    return arquivo
}

//Expandir tamanho da tabela de ficha técnica no review do Edifier W820BT
function abrirTabela() {
    if(verificarArquivo(document.URL) == 'w820bt.html') {
        document.querySelector('.meia_tabela').style.display = 'none'
        document.querySelector('.tabela_inteira').style.display = 'block'
    }
}

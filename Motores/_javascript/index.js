var modo1 = false
var modo2 = false
var modo3 = false
var img01 = document.getElementById('imagem01').style
var img02 = document.getElementById('imagem02').style
var img03 = document.getElementById('imagem03').style
function cresceFoto(imagem) {
    if (imagem == 'imagem01') {
        if (modo1 == false) {
            document.getElementById('msgfechar01').innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clique novamente para fechar!'
            img01.transform = "scale(1.5)"
            img01.transition = '0.5s'
            img01.marginLeft = '180px'
            modo1 = true
        } else {
            document.getElementById('msgfechar01').innerHTML = 'By Mikechie Esparagoza'
            img01.marginLeft = 'auto'
            img01.transition = '0.5s'
            img01.transform = 'scale(1)'
            modo1 = false
        }
    }
    if (imagem == 'imagem02') {
        if (modo2 == false) {
            document.getElementById('msgfechar02').innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clique novamente para fechar!'
            img02.transform = "scale(1.5)"
            img02.transition = '0.5s'
            img02.marginLeft = '180px'
            modo2 = true
        } else {
            document.getElementById('msgfechar02').innerHTML = 'By CulturaMix.com'
            img02.marginLeft = 'auto'
            img02.transition = '0.5s'
            img02.transform = 'scale(1)'
            modo2 = false
        }
    }
    if (imagem == 'imagem03') {
        if (modo3 == false) {
            document.getElementById('msgfechar03').innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clique novamente para fechar!'
            img03.transform = "scale(1.5)"
            img03.transition = '0.5s'
            img03.marginLeft = '180px'
            modo3 = true
        } else {
            document.getElementById('msgfechar03').innerHTML = 'By MDIG'
            img03.marginLeft = 'auto'
            img03.transition = '0.5s'
            img03.transform = 'scale(1)'
            modo3 = false
        }
    }
}
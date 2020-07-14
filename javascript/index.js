function tiposReviews(tipo) {
    if(tipo == 'principais') {
        document.querySelector('#principais_reviews').style.display = 'block'
        document.querySelector('#todos_reviews').style.display = 'none'
        document.querySelector('#informacoes_do_site').style.display = 'block'
    } else {
        document.querySelector('#principais_reviews').style.display = 'none'
        document.querySelector('#todos_reviews').style.display = 'block'
        document.querySelector('#informacoes_do_site').style.display = 'none'
    }
}
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var cordefundo = document.querySelector('body')
    var data = new Date()
    var horas = data.getHours()    
    msg.innerHTML = `Agora são ${horas} horas.`
    if (horas >= 0 && horas < 12){
        img.src = 'imagens/fotomanha.png'
        cordefundo.style.backgroundColor = 'lightblue'
    } else if (horas >= 12 && horas < 18) {
        img.src = 'imagens/fototarde.png'
        cordefundo.style.backgroundColor = 'brown'
    } else {
        img.src = 'imagens/fotonoite.png'
        cordefundo.style.backgroundColor = 'midnightblue'
    }
}


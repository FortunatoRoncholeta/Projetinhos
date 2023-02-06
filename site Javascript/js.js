
function carregar() {

    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    //var hora = 19
    msg.innerHTML = ` Agora são ${hora} horas e ${minutos} minutos.`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'img/manha.png'
        document.body.style.background = `#fef9d1`
    }
    else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = `#efac7c`
    }
    else {
        //boa noite
        img.src = 'img/noite.png'
        document.body.style.background = `
        #1e2a3a`
    }
}


function verificarano() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var sexo = document.getElementsByName('radsex')
    var botaogenero = document.getElementById('botaogenero').style.background = 'rgb(141, 230, 104)'
    // Elementbyname pega os elementos começando no 0 (o primeiro ) ate o chega no ultino ( N)
    if (fano.value.length == 0 || fano.value > ano) {
        alert(`[ERROR] Verifique o ano digitado e tente novamente !!`)

    }
    else {
        var idade = ano - Number(fano.value)
        // aqui criamos uma string vazia para receber o genero
        var genero = ''
        // aqui estamos criando um elemento imagem no html atravez do javascript
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        // cada posicao do vetor seria um elemento no HTML 
        // no caso temos dois input do tipo radio , sendo o 0 e 1
        if (sexo[0].checked) {

            var fundo = document.getElementById('genero').style.background = 'rgb(95, 208, 231)'

            if (idade >= 0 && idade < 10) {
                genero = 'Menino'
                img.setAttribute('src', 'img/menino.png')
            }
            else if (idade < 25) {
                genero = 'Garoto'
                img.setAttribute('src', 'img/garoto.png')
            }


            else if (idade < 60) {
                genero = 'Homem'
                img.setAttribute('src', 'img/moço.png')
            }
            else {
                genero = 'idoso'
                img.setAttribute('src', 'img/vovo.png')
            }
        }
        else if (sexo[1].checked) {

            var fundo = document.getElementById('genero').style.background = 'rgb(240, 151, 151)'
            if (idade >= 0 && idade < 10) {
                genero = 'Menina'
                img.setAttribute('src', 'img/menina.png')
            }
            else if (idade < 25) {
                genero = 'Garota'
                img.setAttribute('src', 'img/garota.png')
            }
            else if (idade < 60) {
                genero = 'Mulher'
                img.setAttribute('src', 'img/moça.png')
            }
            else {
                genero = 'Idosa'
                img.setAttribute('src', 'img/vovó.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = ` Você é um(a) ${genero}, com  ${idade} anos de idade. <br><br>`
        res.appendChild(img)
    }




}
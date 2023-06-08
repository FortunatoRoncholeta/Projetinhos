
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

    // Elementbyname pega os elementos começando no 0 (o primeiro ) ate o chega no ultino ( N)
    if (fano.value.length == 0 || fano.value > ano) {
        alert(`[ERROR] Verifique o ano digitado e tente novamente !!`)

    }
    else {
        let botaogenero = document.getElementById('botao').style.background = 'rgb(141, 230, 104)'
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


function contanumero() {

    var txtinicio = document.getElementById('txtinicio')
    var txtfim = document.getElementById('txtfim')
    var txtpasso = document.getElementById('txtpasso')
    let resultadocon = document.getElementById('resultadocon')
    let inicio = Number(txtinicio.value)
    let fim = Number(txtfim.value)
    let passo = Number(txtpasso.value)


    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        resultadocon.innerHTML = `impossivel contar`
        alert('[ERROR] dados inconsistentes')
    }

    else {
        let fundo = document.getElementById('contando').style.background = ('rgb(86, 215, 232)')


        resultadocon.innerHTML = `Contando... <br> `
        if (passo <= 0) {
            alert('Passo invalido')
        }

        if (inicio < fim) {
            //crescente
            for (let i = inicio; i <= fim; i += passo) {
                resultadocon.innerHTML += `${i} \u{1F427}`
            }
        }
        else {
            //regrssivo
            for (let i = inicio; i >= fim; i -= passo) {

                resultadocon.innerHTML += `${i} \u{1F427}`
            }

        }
        resultadocon.innerHTML += `\u{1F3C1}`
    }
}

function multiplicar() {

    let numero = document.getElementById('txtmulti')
    let res = document.getElementById('resultadotab')

    //.value pra pegar o valor numerico 

    if (numero.value.length == 0) {
        alert('[ERRO] Número incorreto!!!')
    }

    else {
        num = Number(numero.value)
        let mult
        res.innerHTML = ''
        for (let i = 0; i <= 10; i++) {

            mult = i * num
            let item = document.createElement('option')
            let fundo = document.getElementById('tabuada').style.background = 'rgb(240, 151, 151)'
            item.text = `${i}X${num}=${mult}`
            res.appendChild(item)

        }
    }

}

//----------Funçoes para o analisador de notas 
let notas = []
function verifcaNota(nota) {
    // verificando se é vazio ou se é maior que 10 ou menor que 0
    if (nota.value.length == 0 || nota.value < 0 || nota.value > 10) return -1
}



// verifica se o numero ja esta na lista
function adicionar() {
    let nota = document.getElementById('txtnotas')
    let tabela = document.getElementById('tabnota')
    let resultado = document.getElementById('resultadoNotas').innerHTML = ``




    if (verifcaNota(nota) == -1) {
        alert('[ERROR] Número invalido,Somente notas entre 0 e 10 são aceitas')
    }


    else {
        let opt = document.getElementById('opt').innerHTML = `Notas:`
        //adiciona no array o valor da nota
        notas.push(Number(nota.value))
        let lista = document.createElement('option')
        lista.text = `Nota ${nota.value}`
        tabela.appendChild(lista)


    }

    nota.value = ''
    nota.focus()



}

function finalizar() {

    let resultado = document.getElementById('resultadoNotas')
    if (notas.length == 0 || notas.length == 1) alert('[ERROR] Sua lista esta vazia ou possui apenas uma nota')

    else {
        let auxMaior = notas[0]
        let auxMenor = notas[0]
        let Soma = 0
        let Media = 0


        for (let i in notas) {

            Soma += notas[i]
            Media = Soma / notas.length
            if (notas[i] > auxMaior) {
                auxMaior = notas[i]

            }

            if (notas[i] < auxMenor) {
                auxMenor = notas[i]
            }





        }
        resultado.innerHTML = `Foram inseridas ${notas.length} Notas. <br> <br>`
        resultado.innerHTML += `O maior valor é ${auxMaior} <br> <br>`
        resultado.innerHTML += `O menor valor é ${auxMenor} <br> <br>`
        resultado.innerHTML += `A soma de todas as notas foi ${Soma} <br> <br>`
        resultado.innerHTML += `A media da Turma foi de  ${Media} <br> <br>`



    }


}

//-----------------------
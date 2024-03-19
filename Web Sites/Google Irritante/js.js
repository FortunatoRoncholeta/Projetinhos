let ja_cliclou = 0
let google = 0
function cliclou_texto(){
   

    if (ja_cliclou == 0){
    alert("Antes de pesquisar, responda")

    idade =prompt(`Você possui mais de 18 anos ? [SIM] ou [Não] `)
    
    if (idade == 'sim' ){
        alert("Posso confiar em você? não vai me enganar, né?")
       let i=1
        alert(`Vamos contar em voz alta até 5 então:`)
        while(i<6){
            
            alert(`${i} `)
            i++

        }
            alert(`Pronto pode fazer sua pesquisa`)
            ja_cliclou = 1
            
    }
        
    

    else{

        alert("Esta busca esta autorizada apenas para maiores de 18 anos")
    }
}

    else if (ja_cliclou ==1){

        alert(``)
    }

}

function form1(){
    
    let titulo= document.getElementById('google')
    let fundo = document.getElementById('form')
    titulo.style.color='pink'

    
    if(google>50){
        fundo.style.backgroundColor=(`pink`)
    }
    
    
    else {
        google++
        
    }
    
   

}

function form2(){
    let titulo= document.getElementById('google')
    titulo.style.color='black'
    
}
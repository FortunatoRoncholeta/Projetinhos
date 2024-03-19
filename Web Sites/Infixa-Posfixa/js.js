// pilha de operaçoes e seu contador 
let pilhaOP = []
let OP= -1
//pilha de poxfixa e seu contador
let pilhaPos =[]
let Pos=0
// resultado final da posfixa
let resultadoFinal = ""
// funcao para adicionar elemento na pilha de Opercao
function add(operador){
    OP++
    pilhaOP[OP]=operador

}

// funcao para retirar elemento da pilha de Operacao e retorna-lo
function retirar(){
if(OP==-1) return  0
else{
    let aux= pilhaOP[OP]
    OP--
    return aux
}
}

function operador(operador) {
    if (
        operador == "(" ||
        operador == ")" ||
        operador == '+' ||
        operador == '-' ||
        operador == '*' ||
        operador == '/' ||
        operador == '^')
        return true
    else
        return false
}

function prioridade(operador) {
    // Funçao para dar as prioridades nos operadores 
    if (operador == '+' || operador == '-') return 1

    else if (operador == '*' || operador == '/') return 2

    else if(operador == "x" || operador == "(" || operador == ")") return 0

    else if (operador == '^') return 3

    else return -1
}

// funçao para limpar dados
function limpar(){
    resultadoFinal = ""
    let resultado = document.getElementById('resultado')
    resultado.innerHTML= `A posfixa é: `
} 

//1*2/3
//1+2*3 =123*+
//1*2+4 =12*4+
//1+2*3-8 = 123*+8-

function converter() {
    limpar()
    let infixa = document.getElementById('txtinfixa').value
    let resultado = document.getElementById('resultado')
    add('X')
   
    for (let i = 0; i < infixa.length; i++) {

        let teste = infixa[i]

        if(operador(teste)){

            //Quando encontrar um ) ele vai percorrer a pilha passando pra posfixa os operadores com a prioridade de () 
            if (teste== ")") {
                while (pilhaOP[OP] != "(") {
                    pilhaPos[Pos++] = retirar()
                }
                //Apos remover da pilha o operadores com a prioridade do () ele remove o ( e voltar ao laço de repeticao
                retirar()
            }
            //insere o ( na pilha
            else if (teste == "(") {
                add(teste)
            }


            else if (prioridade(teste) > prioridade(pilhaOP[OP])) {
            add(teste) 
            //alert(`adicionou o ${teste} na pilha`)
        }
        else {
            //se o elemento tiver prioridade menor ou igual ao topo da pilha, ele insere o topo da pilha na operação posfixa
            while (prioridade(teste) <= prioridade(pilhaOP[OP]) && OP > -1) {
                pilhaPos[Pos++] = retirar()
                //alert('entrou ')
            }

            //apos a inserir o que tem prioridade no operação pos fixa ele insere o elemento no topo da pilha
            add(teste);
        }

    }
       else{

        pilhaPos[Pos++]= teste
       }
       
    }
      
 // Aqui vamos colocar os Operadores que sobraram na pilha dentro da posfixa
while(pilhaOP[OP]!='X'){
    pilhaPos[Pos++] = retirar()

}
    
//transforma a array posfixado em uma string 

for (var i = 0; i < pilhaPos.length; i++) {
    resultadoFinal += pilhaPos[i]
}
resultado.innerHTML=``
resultado.innerHTML= `A posfixa é ${resultadoFinal}`


}

let botao= document.getElementById('butao')

function botaoentrar(){
    botao.style.backgroundColor= 'black'
    botao.style.color='white'
}

function baotaosaiu(){
    botao.style.backgroundColor= 'white'
    botao.style.color='black'
}
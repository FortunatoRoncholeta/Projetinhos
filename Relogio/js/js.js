//pega o elemento pelo id na pagina html e altera o seu conteudo
const horas = document.getElementById('hora');
const minutos = document.getElementById('minuto');
const segundos = document.getElementById('segundo');
const dias =document.getElementById('dia');
const meses =document.getElementById('mes');
const anos =document.getElementById('ano');


const relogio = setInterval(function time(){
    //pega a hora atual do sistema com a função getHours()
    let relogio =new Date();
    let hora = relogio.getUTCHours();
    let minuto = relogio.getMinutes();
    let segundo = relogio.getSeconds();
   
    // verifica se o valor do horário é menor que 10 e adiciona o 0 na frente
    if (hora < 10)  hora = '0' + hora;
    if (minuto < 10)  minuto = '0' + minuto;
    if (segundo < 10)  segundo = '0' + segundo;
    
    // atualiza o valor do horário
    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;

});


const data = setInterval(function time(){

    



    //pega a hora atual do sistema com a função getHours()
    let calendario =new Date();
    let dia = calendario.getUTCDate();
    let mes = calendario.getUTCMonth()+1;
    let ano = calendario.getUTCFullYear();
    
    if (dia < 10)  dia = '0' + dia ;
    if (mes < 10)  mes = '0' + mes ;
    if (ano < 10)  ano = '0' + ano;

    // atualiza o valor do horário
    dias.textContent = dia + '/';
    meses.textContent = mes + '/';
    anos.textContent = ano;

});

    

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
    let hora = relogio.getUTCHours()-3;
    let minuto = relogio.getUTCMinutes();
    let segundo = relogio.getUTCSeconds();
   
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

    
//===========Relogio mundiais ===============

    

//===========Nova iorque ===============
const horasNY = document.getElementById('horaNY');
const minutosNY = document.getElementById('minutoNY');
const segundosNY = document.getElementById('segundoNY');
const diasNY =document.getElementById('diaNY');
const mesesNY =document.getElementById('mesNY');
const anosNY =document.getElementById('anoNY');


const relogioNY = setInterval(function time(){
    //pega a hora atual do sistema com a função getHours()
    let relogio =new Date();
    let hora = relogio.getUTCHours()-4;
    let minuto = relogio.getUTCMinutes();
    let segundo = relogio.getUTCSeconds();
   
    // verifica se o valor do horário é menor que 10 e adiciona o 0 na frente
    if (hora < 10)  hora = '0' + hora;
    if (minuto < 10)  minuto = '0' + minuto;
    if (segundo < 10)  segundo = '0' + segundo;
    
    // atualiza o valor do horário
    horasNY.textContent = hora;
    minutosNY.textContent = minuto;
    segundosNY.textContent = segundo;

});


const dataNY = setInterval(function time(){
    //pega a hora atual do sistema com a função getHours()
    let calendario =new Date();
    let dia = calendario.getUTCDate();
    let mes = calendario.getUTCMonth()+1;
    let ano = calendario.getUTCFullYear();
    
    if (dia < 10)  dia = '0' + dia ;
    if (mes < 10)  mes = '0' + mes ;
    if (ano < 10)  ano = '0' + ano;

    // atualiza o valor do horário
    diasNY.textContent = dia + '/';
    mesesNY.textContent = mes + '/';
    anosNY.textContent = ano;

});

//===========TOQUIO  ===============
const horasJP = document.getElementById('horaJP');
const minutosJP = document.getElementById('minutoJP');
const segundosJP = document.getElementById('segundoJP');
const diasJP =document.getElementById('diaJP');
const mesesJP =document.getElementById('mesJP');
const anosJP =document.getElementById('anoJP');


const relogioJP = setInterval(function time(){
    //pega a hora atual do sistema com a função getHours()
    let relogio =new Date();
    let hora = relogio.getUTCHours()-15;
    let minuto = relogio.getUTCMinutes();
    let segundo = relogio.getUTCSeconds();
   
    // verifica se o valor do horário é menor que 10 e adiciona o 0 na frente
    if (hora < 10)  hora = '0' + hora;
    if (minuto < 10)  minuto = '0' + minuto;
    if (segundo < 10)  segundo = '0' + segundo;
    
    // atualiza o valor do horário
    horasJP.textContent = hora;
    minutosJP.textContent = minuto;
    segundosJP.textContent = segundo;

});


const dataJP = setInterval(function time(){
    //pega a hora atual do sistema com a função getHours()
    let calendario =new Date();
    let dia = calendario.getUTCDate()+1;
    let mes = calendario.getUTCMonth()+1;
    let ano = calendario.getUTCFullYear();
    
    if (dia < 10)  dia = '0' + dia ;
    if (mes < 10)  mes = '0' + mes ;
    if (ano < 10)  ano = '0' + ano;

    // atualiza o valor do horário
    diasJP.textContent = dia + '/';
    mesesJP.textContent = mes + '/';
    anosJP.textContent = ano;

});
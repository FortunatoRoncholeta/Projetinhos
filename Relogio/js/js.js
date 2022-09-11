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
    let periodo = "AM";

    if (horas==0){
        horas=12;
    }else if(horas >=12){
        horas= horas -12;
        period="PM"
    }
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
   
    let periodo = "AM";

    if (horas==0){
        horas=12;
    }else if(horas >=12){
        horas= horas -12;
        period="PM"
    }

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


//===========LONDRES  ===============
const horasL = document.getElementById('horaL');
const minutosL = document.getElementById('minutoL');
const segundosL = document.getElementById('segundoL');
const diasL =document.getElementById('diaL');
const mesesL =document.getElementById('mesL');
const anosL =document.getElementById('anoL');


const relogioL = setInterval(function time(){
    //pega a hora atual do sistema com a função getHours()
    let relogio =new Date();
    let hora = relogio.getUTCHours();
    let minuto = relogio.getUTCMinutes();
    let segundo = relogio.getUTCSeconds();
   
    let periodo = "AM";

    if (horas==0){
        horas=12;
    }else if(horas >=12){
        horas= horas -12;
        period="PM"
    }

    // verifica se o valor do horário é menor que 10 e adiciona o 0 na frente
    if (hora < 10)  hora = '0' + hora;
    if (minuto < 10)  minuto = '0' + minuto;
    if (segundo < 10)  segundo = '0' + segundo;
    
    // atualiza o valor do horário
    horasL.textContent = hora;
    minutosL.textContent = minuto;
    segundosL.textContent = segundo;

});


const dataL = setInterval(function time(){
    //pega a hora atual do sistema com a função getHours()
    let calendario =new Date();
    let dia = calendario.getUTCDate();
    let mes = calendario.getUTCMonth()+1;
    let ano = calendario.getUTCFullYear();
    
    if (dia < 10)  dia = '0' + dia ;
    if (mes < 10)  mes = '0' + mes ;
    if (ano < 10)  ano = '0' + ano;

    // atualiza o valor do horário
    diasL.textContent = dia + '/';
    mesesL.textContent = mes + '/';
    anosL.textContent = ano;

});



//===========PEQUIN  ===============
const horasP = document.getElementById('horaP');
const minutosP = document.getElementById('minutoP');
const segundosP = document.getElementById('segundoP');
const diasP =document.getElementById('diaP');
const mesesP =document.getElementById('mesP');
const anosP =document.getElementById('anoP');


const relogioP = setInterval(function time(){
    //pega a hora atual do sistema com a função getHours()
    let relogio =new Date();
    let hora = relogio.getUTCHours()-16;
    let minuto = relogio.getUTCMinutes();
    let segundo = relogio.getUTCSeconds();
   
    let periodo = "AM";

    if (horas==0){
        horas=12;
    }else if(horas >=12){
        horas= horas -12;
        period="PM"
    }
    // verifica se o valor do horário é menor que 10 e adiciona o 0 na frente
    if (hora < 10)  hora = '0' + hora;
    if (minuto < 10)  minuto = '0' + minuto;
    if (segundo < 10)  segundo = '0' + segundo;
    
    // atualiza o valor do horário
    horasP.textContent = hora;
    minutosP.textContent = minuto;
    segundosP.textContent = segundo;

});


const dataP = setInterval(function time(){
    //pega a hora atual do sistema com a função getHours()
    let calendario =new Date();
    let dia = calendario.getUTCDate()+1;
    let mes = calendario.getUTCMonth()+1;
    let ano = calendario.getUTCFullYear();
    
    if (dia < 10)  dia = '0' + dia ;
    if (mes < 10)  mes = '0' + mes ;
    if (ano < 10)  ano = '0' + ano;

    // atualiza o valor do horário
    diasP.textContent = dia + '/';
    mesesP.textContent = mes + '/';
    anosP.textContent = ano;

});



//===========PARIS  ===============
const horasPA = document.getElementById('horaPA');
const minutosPA = document.getElementById('minutoPA');
const segundosPA = document.getElementById('segundoPA');
const diasPA =document.getElementById('diaPA');
const mesesPA =document.getElementById('mesPA');
const anosAP =document.getElementById('anoPA');


const relogioPA = setInterval(function time(){
    //pega a hora atual do sistema com a função getHours()
    let relogio =new Date();
    let hora = relogio.getUTCHours()+2;
    let minuto = relogio.getUTCMinutes();
    let segundo = relogio.getUTCSeconds();
    let periodo = "AM";

    if (horas==0){
        horas=12;
    }else if(horas >=12){
        horas= horas -12;
        period="PM"
    }
    // verifica se o valor do horário é menor que 10 e adiciona o 0 na frente
    if (hora < 10)  hora = '0' + hora;
    if (minuto < 10)  minuto = '0' + minuto;
    if (segundo < 10)  segundo = '0' + segundo;
    
    // atualiza o valor do horário
    horasPA.textContent = hora;
    minutosPA.textContent = minuto;
    segundosPA.textContent = segundo;

});


const dataPA = setInterval(function time(){
    //pega a hora atual do sistema com a função getHours()
    let calendario =new Date();
    let dia = calendario.getUTCDate();
    let mes = calendario.getUTCMonth()+1;
    let ano = calendario.getUTCFullYear();
    
    if (dia < 10)  dia = '0' + dia ;
    if (mes < 10)  mes = '0' + mes ;
    if (ano < 10)  ano = '0' + ano;

    // atualiza o valor do horário
    diasPA.textContent = dia + '/';
    mesesPA.textContent = mes + '/';
    anosPA.textContent = ano;

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
    let periodo = "AM";

    if (horas==0){
        horas=12;
    }else if(horas >=12){
        horas= horas -12;
        period="PM"
    }
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



//===========TOQUIO  ===============
const horasS = document.getElementById('horaS');
const minutosS = document.getElementById('minutoS');
const segundosS = document.getElementById('segundoS');
const diasS =document.getElementById('diaS');
const mesesS =document.getElementById('mesS');
const anosS =document.getElementById('anoS');


const relogioS = setInterval(function time(){
    //pega a hora atual do sistema com a função getHours()
    let relogio =new Date();
    let hora = relogio.getUTCHours()-14;
    let minuto = relogio.getUTCMinutes();
    let segundo = relogio.getUTCSeconds();
   
    // verifica se o valor do horário é menor que 10 e adiciona o 0 na frente
    if (hora < 10)  hora = '0' + hora;
    if (minuto < 10)  minuto = '0' + minuto;
    if (segundo < 10)  segundo = '0' + segundo;
    let periodo = "AM";

    if (horas==0){
        horas=12;
    }else if(horas >=12){
        horas= horas -12;
        period="PM"
    }
    // atualiza o valor do horário
    horasS.textContent = hora;
    minutosS.textContent = minuto;
    segundosS.textContent = segundo;

});


const dataS = setInterval(function time(){
    //pega a hora atual do sistema com a função getHours()
    let calendario =new Date();
    let dia = calendario.getUTCDate()+1;
    let mes = calendario.getUTCMonth()+1;
    let ano = calendario.getUTCFullYear();
    
    if (dia < 10)  dia = '0' + dia ;
    if (mes < 10)  mes = '0' + mes ;
    if (ano < 10)  ano = '0' + ano;

    // atualiza o valor do horário
    diasS.textContent = dia + '/';
    mesesS.textContent = mes + '/';
    anosS.textContent = ano;

});
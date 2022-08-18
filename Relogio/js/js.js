//pega o elemento pelo id na pagina html e altera o seu conteudo
const horas = document.getElementById('hora');
const minutos = document.getElementById('minuto');
const segundos = document.getElementById('segundo');


const relogio = setInterval(function time(){
    //pega a hora atual do sistema com a função getHours()
    let dataAgora =new Date();
    let hora = dataAgora.getHours();
    let minuto = dataAgora.getMinutes();
    let segundo = dataAgora.getSeconds();
   
    // verifica se o valor do horário é menor que 10 e adiciona o 0 na frente
    if (hora < 10)  hora = '0' + hora;
    if (minuto < 10)  minuto = '0' + minuto;
    if (segundo < 10)  segundo = '0' + segundo;
    
    // atualiza o valor do horário
    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;

});

    

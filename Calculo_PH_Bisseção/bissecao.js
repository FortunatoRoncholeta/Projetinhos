function Calcula(){


function equacao_equilibrio_acido_base(pH) {
    // Equação de equilíbrio ácido-base que relaciona o pH com as concentrações de H+ e OH-
    return Math.pow(10, -pH) - Math.pow(10, -14 + pH)
  }
  
  // limites a e b sendo incial e final 
  // ontinua iterando enquanto a diferença entre b e a for maior do que a tolerância definida.
  function bissecao(f, a, b, tolerancia) {
    while (Math.abs(b - a) > tolerancia) {
      let c = (a + b) / 2
      if (f(c) === 0) {
        return c
      } else if (f(a) * f(c) < 0) {
        b = c
      } else {
        a = c
      }
    }
    return (a + b) / 2
  }
  
  // Definindo os valores iniciais
  
  
  
  const a= parseInt(document.getElementById('iniph').value)
  const b = parseInt(document.getElementById('fimph').value)
  const tolerancia=parseFloat(document.getElementById('Tolerancia').value)
  
  
  
  // Chamando a função de bisseção para encontrar o valor do pH
  let pH = bissecao(equacao_equilibrio_acido_base, a, b, tolerancia);
  
  var res = document.getElementById('resultado')

  res.innerHTML = "O pH da solução é: " + pH.toFixed(2);
  

  console.log("O pH da solução é:", pH)
}
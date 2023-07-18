


        // Função que realiza o cálculo e exibe o gráfico
        function calcularCrescimento() {

           

          // função que representa o método de Verhulst dy/dt = ry(1-y/K) para prever o crescimento
          function verhulst(t, y) {
              return r * y * (1 - y / K)
          }

          // Definição do método de Runge-Kutta de quarta ordem
          function rungeKutta(t, y, h) {

              const k1 = h * verhulst(t, y)
              const k2 = h * verhulst(t + h / 2, y + k1 / 2)
              const k3 = h * verhulst(t + h / 2, y + k2 / 2)
              const k4 = h * verhulst(t + h, y + k3);
              const ynew = y + (k1 + 2 * k2 + 2 * k3 + k4) / 6
              return ynew
          }

          // r --> Taxa de crescimento 
          // K --> Capacidade de suporte do ambiente
          // y0 --> Densidade populacional 
          // t0 --> tempo inicial
          // tf --> tempo final
          // h --> tamanho do passo 

          let r = parseFloat(document.getElementById('cres').value)
          let K = parseFloat(document.getElementById('sup').value)
          let y0 = parseFloat(document.getElementById('pop').value)
          let t0 = parseFloat(document.getElementById('ini').value)
          let tf = parseFloat(document.getElementById('fim').value)
          let h = parseFloat(document.getElementById('passo').value)


         



          // Cria os arrays de tempo e densidade populacional
          const t = [];
          const y = [];
          let currentT = t0
          let currentY = y0

          // Calcula a densidade populacional em cada instante de tempo usando o método de Runge-Kutta
          while (currentT <= tf) {
              t.push(currentT)
              y.push(currentY)
              currentY = rungeKutta(currentT, currentY, h)
              currentT += h
          }

         

          // Mostra resultados
          const ctx = document.getElementById('myChart').getContext('2d')

         

          new Chart(ctx, {
              type: 'line',
              data: {
                  labels: t,
                  datasets: [
                      {
                          label: 'Densidade populacional',
                          data: y,
                          fill: false,
                          borderColor: 'rgb(75, 192, 192)',
                          tension: 0.1
                      }
                  ]
              },
              options: {
                  scales: {
                      x: {
                          title: {
                              display: true,
                              text: 'Tempo (dias)'
                          }
                      },
                      y: {
                          title: {
                              display: true,
                              text: 'Densidade populacional'
                          }
                      }
                  }
              }
          })


          



      }




      function limpar(){
        const ctx = document.getElementById('myChart').getContext('2d');
        const chart = Chart.getChart(ctx);
        if (chart) {
          chart.destroy();
        }

      }
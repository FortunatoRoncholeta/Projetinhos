# Cálculo de progressão do crescimento de Bacterias pelo Modelo de Verhulst.

Verhulst foi um matemático belga que introduziu a equação de crescimento logístico onde a população deverá crescer até um limite máximo sustentável, isto é, ela tende a se estabilizar num determinado valor. O modelo de Verhulst é, essencialmente, o modelo de Malthus modificado, considerando a variação de crescimento dependendo da própria população em cada instante e satisfazendo algumas propriedades comumente utilizadas para o estudo do crescimento de bactérias.

A equação diferencial ordinária de primeira ordem é dada por:

dP/dt = r _ P _ (1 - P/K)

Onde:

- dP/dt é a taxa de variação da população (derivada de P em relação ao tempo t)
- r é a taxa de crescimento intrínseco da população
- P é a população atual
- K é a capacidade de suporte do ambiente (limite máximo de população)

Essa equação descreve como a taxa de crescimento de uma população varia em relação à população atual e à capacidade de suporte do ambiente.

No algoritmo foi feita a implementação do método de forma que a função _verhulst_ representa a equação diferencial ordinária de primeira ordem do
modelo de **Verhulst**. O método de **Runge-Kutta** é utilizado para calcular o valor da densidade populacional em cada instante de tempo,
e o gráfico da densidade populacional em função do tempo é plotado no final do código.

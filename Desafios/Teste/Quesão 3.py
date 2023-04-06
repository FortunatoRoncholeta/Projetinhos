#Questao 3
import pandas as pd
import seaborn as sns

dados = pd.read_json('dados.json')
dados2 =dados.drop([3,4,6,10,11,17,18,24,25])

dados2


maior = dados2['valor'].max()
menor = dados2['valor'].min()
media = dados['valor'].mean()





print('O menor valor de faturamento foi de $ {}  '.format(round(menor,2)))
print('---------------------------------------')
print('O maior valor de faturamento foi de $ {}  '.format(round(maior,2)))
print('---------------------------------------')
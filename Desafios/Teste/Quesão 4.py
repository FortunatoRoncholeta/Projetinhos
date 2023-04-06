#Questao 4

SP=67836.43
RJ=36678.66
MG=29229.88
ES=27165.48
outros= 19849.53

Total= SP+RJ+MG+ES+outros


PerSP=(SP*100)/Total
PerRJ=(RJ*100)/Total
PerMG=(MG*100)/Total
PerES=(ES*100)/Total
PerOu=(outros*100)/Total

print('SP - {} %'.format(round(PerSP,2)))
print('RJ - {} %'.format(round(PerRJ,2)))
print('MG - {} %'.format(round(PerMG,2)))
print('ES - {} %'.format(round(PerES,2)))
print('Outros - {} %'.format(round(PerOu,2)))

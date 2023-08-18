# Quesão 2
def fibo(num):
  n1=0
  n2=1
  i=2
  # calculo da sequencia fibonacci e troca de valores 
  while i <= num:
    n3= n1+n2
    n1=n2
    n2=n3
    i+=1

  ref=n3
  return ref
  
# verificando se o numero pertence a sequencia
def verifica(numero, referencia):
  if(numero == referencia):
     print("O número", numero, "pertence à sequência de Fibonacci.")

  else:
    print("O número", numero, "não pertence à sequência de Fibonacci.")



  
numero = int(input("Digite um número: "))
referencia=0
referencia=fibo(numero)


verifica(numero,referencia)




def count_letters(oracion):
  conteo_letra = {}
  
  for letra in oracion:

    if letra in oracion:
      conteo_letra[letra] += 1
    else:
      conteo_letra[letra] = 1

  return 

print(count_letters("Hola mundo"))
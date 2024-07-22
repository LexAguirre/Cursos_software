def count_letters(phrase):
  conteo_letra = {}
  
  for letra in phrase:
    if letra in conteo_letra:
      conteo_letra[letra] += 1
    else:
      conteo_letra[letra] = 1

  return conteo_letra

print(count_letters("Hola mundo"))

es_estudiante = True

print(es_estudiante)

trabaja = False

print(trabaja)
# devolvera true si todo lo comparado es true sino devolvera false
print(es_estudiante and trabaja)
# devolvera true si alguna de lo comparado es true sino devolvera false
print(es_estudiante or trabaja)
# Invierte el contenido de la variable en este caso el booleano
print(not es_estudiante)
print(not trabaja)

numero1 = 5
numero2 = 5

print(numero1, numero2)
# Verifica la igualdad de las dos variables si no son iguales devuelve false
print(numero1 == numero2)

numero3 = 7

print(numero1 == numero3)  # igual
print(numero1 != numero3)  # No son iguales
print(numero1 > numero3)  # Mayor que
print(numero1 < numero3)  # Menor que
print(numero1 >= numero3)  # Mayor o igual
print(numero1 >= numero2)  # Mayor o igual
print(numero1 <= numero2)  # Menor o igual
print(numero1 <= numero3)  # Menor o igual

"""
El problema con las listas es que al ser dinamicas causan que el leguaje guarde mucha memoria desperdiciando recursos por lo cual se usan tuplas
"""

numeros = [1, 2, 3, 4, 5];

numeros.append("Hola");
numeros.pop(5);

print(numeros);

numeros_2 = [6, 7, 8, 9];

lista_final = numeros + numeros_2;

print(lista_final);

mi_tupla = (1, 2, 3, 4, 5); #Las tuplas son estaticas pero al no poder realizar cambios entonces nos permiten navegarlas de una maner mucho mas rapida

"""Las tuplas son las estructura de datos mas rapidas de python ya que son inmutables"""

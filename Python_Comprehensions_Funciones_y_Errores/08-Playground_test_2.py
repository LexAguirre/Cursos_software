"""
Para resolver este desafío, tu reto es refactorizar el código base utilizando la característica de "List Comprehension" de Python.

El código base incluye una lista llamada numbers que contiene números pares e impares. El algoritmo actual selecciona los números pares de esta lista y los agrega a una nueva lista llamada even_numbers.

Tu reto es crear la misma lista utilizando la característica de "List Comprehension" de Python para crear la lista de números pares de manera más concisa y eficiente y el resultado debería quedar en la variable even_numbers_v2. Las dos técnicas deberían de dar el mismo resultado.

Ejemplo:

Input:
[35, 16, 10, 34, 37, 25]

Output:
v1 => [16, 10, 34]
v2 => [16, 10, 34]
"""

numbers = [35, 16, 10, 34, 37, 25];

even_numbers = [];
for number in numbers:
  if number % 2 == 0:
    even_numbers.append(number);
print('v1 =>', even_numbers);

# Ahora usando List Comprehension 👇
even_numbers_v2 = [num for num in numbers if num % 2 == 0];

print('v2 =>', even_numbers_v2);
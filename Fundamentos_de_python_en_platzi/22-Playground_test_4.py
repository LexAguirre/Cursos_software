"""
En este desafío, se te proporcionará una lista de letras llamada letters. Tu reto es realizar las siguientes operaciones en orden:

Agregar la letra G al final de la lista.
Reemplazar la letra en la posición 0 con la letra Z.
Eliminar la letra C de la lista.
Imprimir la lista resultante al revés.
Ejemplo:

Input: ["A", "B", "C", "D", "E", "F"]
Output: ["G", "F", "E", "D", "B", "Z"]

Recuerda que debes realizar las operaciones en el orden indicado y utilizar las funciones y métodos de las listas de Python apropiados para cada tarea.
"""

letters = ['A', 'B', 'C', 'D', 'E', 'F'];

letters.append("G");
letters.pop(0);
letters.insert(0, "Z");
letters.pop(letters.index("C"));
letters.reverse();

# Escribe tu solución 👇

print(letters);
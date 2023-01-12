"""
En este desafío, se te proporcionará un diccionario llamado person que contiene información sobre una persona. Tu reto es realizar las siguientes operaciones en orden:

Agregar un nuevo elemento al diccionario con la llave "twitter" y el valor "@nicobytes".
Actualizar el valor del elemento con la llave "name" con el valor "Felipe".
Eliminar el elemento del diccionario con la llave "age".
Imprimir una lista con las llaves del diccionario.
Imprimir una lista con los valores del diccionario.
Ejemplo:

Input:
person = {
    "name": "Nicolas",
    "lastName": "Molina",
    "age": 29
}

Output:
["name", "lastName", "twitter"]
["Felipe", "Molina", "@nicobytes"]

Recuerda que debes realizar las operaciones en el orden indicado y utilizar las funciones y métodos de los diccionarios de Python apropiados para cada tarea.
"""

person = {
    'name': 'Nicolas',
    'lastName': 'Molina',
    'age': 29,
}
# Escribe tu solución 👇
person["twitter"] = "@nicobytes";
person["name"] = "Felipe";
person.pop("age");

print(list(person.keys()));
print(list(person.values()));
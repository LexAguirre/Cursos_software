"""
Para resolver este desafío, debes utilizar la función my_divide, que recibe dos parámetros de entrada que representan los números a dividir. Dentro de esta función, debes implementar la lógica necesaria para capturar la excepción ZeroDivisionError. También, debes retornar un mensaje que diga No se puede dividir por 0 cuando esta excepción ocurra.

Ejemplo 1:

Input: 10, 2
Output: 5.0

Ejemplo 2:

Input: 10, 0
Output: No se puede dividir por 0
"""


def my_divide(a, b):
    # Escribe tu solución 👇
    try:
        result = a / b
    except ZeroDivisionError as error:
        return ("No se puede dividir por 0")
    return result


response = my_divide(10, 2)
print(response)  # 5

response = my_divide(10, 0)
print(response)  # No se puede dividir por 0

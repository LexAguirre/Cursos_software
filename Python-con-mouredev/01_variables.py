# Variables

# Las variables no deben contener mayusculas para tener mejores practicas de programación

my_str_variables = "My Srting variable"
print(my_str_variables)

my_int_variable = 5
print(my_int_variable)

my_int_to_str_variable = str(my_int_variable)
print(my_int_to_str_variable)
print(type(my_int_to_str_variable))

my_bool_variable = False
print(my_bool_variable)

# Concatenacion de las variables
print(my_str_variables, my_int_variable, my_bool_variable)
print("Este es el valor de:", my_bool_variable)

# Funciones del sistema
print(len(my_str_variables))

# Variables en una sola línea ¡Practica no recomendable!
name, surname, alias, age = "Ramón", "Aguirre", "RayLex", 20
print("Me llamo: ", name, surname, ". Mi edad es: ",
      age, ". Y mi alias es: ", alias, ".")

# Input
'''
name = input("Cual es tu nombre?");
age = input("Cuantos años tienes?");
'''
name = 35
age = "Ramón"

print(name)
print(age)

address: str = "Mi dirreccion"
address = True
address = 5
address = 13.4
print(type(address))
